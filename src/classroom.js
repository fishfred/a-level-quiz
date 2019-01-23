"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const request = require("request");
function getClasses(token, isTeacher) {
    if (token.startsWith("TEST_")) {
        return new Promise((res, rej) => {
            res({ "courses": [{ id: "TEST_CLASS", name: "Test Class" }] });
        });
    }
    return new Promise((resolve, reject) => {
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
            resolve(body);
        });
    });
}
exports.getClasses = getClasses;
function getUsersInClass(token, classId, isTeacher = true) {
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
            let clas = undefined;
            body.courses.forEach((course) => {
                if (course.id == classId) {
                    clas = course;
                }
            });
            resolve(body);
        });
    });
    return p;
}
exports.getUsersInClass = getUsersInClass;
//# sourceMappingURL=classroom.js.map