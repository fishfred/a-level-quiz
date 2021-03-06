/**
 * Game scoreboard
 * @extends Scene
 */
class Scoreboard extends Scene {
  /**
   * 
   * @param {Object} data 
   * @param {Object[]} data.leaderboard The current player leaderboard
   * @param {string} data.leaderboard.name The player's name
   * @param {number} data.leaderboard.score The player's score
   * @param {number} data.leaderboard.type The player's type
   * @param {string} data.fact Text to display about the question
   */
  generateHtml(data) {
    let leaderboard = "";
    console.log(data)
    data.leaderboard.forEach(function (player, i) {
      leaderboard += `<h5>${player.name} <span>${player.score}</span></h5>`
    })
    return html`
<div class="header">
  <h1>Scoreboard</h1><button onclick="end()">Finish</button><button onclick="next()">Continue</button>
</div>
<h3>${data.fact ? data.fact : ""}</h3>
<div class="leaderboard">${leaderboard}</div>`;
  }
}