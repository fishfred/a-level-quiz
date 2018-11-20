/**
 * This contains functions for use when the game is actually running
 * This is the only script which is allowed to use socket.io
 */

let socket;

/**
* Starts a game when it is in the lobby
*/
function startgame() {
    loadScene("loading", { text: "Starting game" });
    socket.emit("startgame");
}

/**
 * Connects to the socket.io server and joins a game
 * @param {Number} code 
 */
function connectToGame(code) {
    // Connects to the socket.io server
    socket = io(`/?code=${code}&token=${GOOGLE_TOKEN}`);
    setupSocketEvents(socket)
}

function lobbyContinue(){
    socket.emit("lobbyContinue")
}

function submitAnswer(id){
    console.log(`answer ${id}`)
    socket.emit("submitAnswer", id)
}
/**
 * Adds all required events to the socket.io socket
 * This contains almost all game logic
 * @param {SocketIO.Socket} socket 
 */
function setupSocketEvents(socket) {
    // This runs when there is an error on the server
    socket.on("displayError", function (data) {
        loadScene("error", { text: data.text, status: "", continue: data.continue })
    });

    socket.on("forceDisconnect", function(){
        socket.disconnect(true);
    })

    socket.on("revealAnswer", function(answerStats){
        console.log("Reveal answer")
        showCorrectAnswer(answerStats)
    })

    socket.on("scoreboard", function(question){
        loadScene("scoreboard", question)
    })

    // This runs when the server wants us to display a question
    socket.on("showQuestion", function (question) {
        console.log(question)
        loadScene(currentUser.userType == 0 ? "studentquestion" : "teacherquestion", question);
    })

    socket.on("hideAnswers", function(){
        loadScene("waitingForAnswers")
    })

    socket.on("numberOfAnswers", function(num){
        $("#numberAnswers").text(num)
    })

    // This is when the lobby has changed, and updates the screen accordingly
    socket.on("updateLobbyStatus", function (data) {
        currentGame = data.game;
        loadScene(currentUser.userType == 0 ? "studentlobby" : "teacherlobby");
    })

    socket.on("correctAnswer", function(data){
        if(currentUser.userType == 0){
            loadScene("correctanswer", data)
        }
    })

    socket.on("incorrectAnswer", function(data){
        if(currentUser.userType == 0){
            loadScene("incorrectanswer", data)
        }
    })
}

function continueQuestion(){
    socket.emit("continueQuestion");
}

function revealAnswersToPlayers(){
    socket.emit("revealAnswersToPlayers")
}