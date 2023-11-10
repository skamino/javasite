var express = require('express');
var router = express.Router();

let javaController = require('../controllers/javaController');

//render home page
router.get('/javaLessonsHome', requireAuth, javaController.renderJavaLessonsHome);
router.get('/lesson1', requireAuth, javaController.renderLesson1);
router.get('/lesson2', requireAuth, javaController.renderLesson2);
router.get('/lesson3', requireAuth, javaController.renderLesson3);

module.exports = router;

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}