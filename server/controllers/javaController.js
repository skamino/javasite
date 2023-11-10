let express = require('express');
let router = express.Router();

//render Home page
module.exports.renderJavaLessonsHome = (req, res, next) => {
    res.render('javaLessons/javaLessonsHome', { title: "Lessons" });
}
module.exports.renderLesson1 = (req, res, next) => {
    res.render('javaLessons/lesson1', { title: "Lesson 1" });
}
module.exports.renderLesson2 = (req, res, next) => {
    res.render('javaLessons/lesson2', { title: "Lesson 2" });
}
module.exports.renderLesson3 = (req, res, next) => {
    res.render('javaLessons/lesson3', { title: "Lesson 3" });
}