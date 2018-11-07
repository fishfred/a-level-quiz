const {
    google
} = require("googleapis");
var request = require("request");

exports.getClasses = function (token, isTeacher) {
    let p = new Promise((resolve, reject) => {
        var options = {
            method: 'GET',
            url: 'https://classroom.googleapis.com/v1/courses',
            qs: isTeacher ? {
                teacherId: 'me'
            } : {
                studentId: 'me'
            },
            headers: {
                'Authorization': "Bearer " + token,
                'cache-control': 'no-cache'
            }
        };

        request(options, function (err, res, body) {
            resolve(body)
        });
    })
    return p;
}