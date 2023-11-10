var express = require('express');
var router = express.Router();

let indexController = require("../controllers/indexController");


/* GET home page. */
router.get('/', indexController.renderIndex);
router.get('/createAccount', indexController.renderCreateAccount);
router.post('/createAccount', indexController.processCreateAccount);
router.get('/login', indexController.renderLogin);
router.post('/login', indexController.processLogin);
router.get('/loggedInHome', requireAuth, indexController.renderLoggedInHome);
router.get('/logout', requireAuth, indexController.performLogout);


module.exports = router;


function requireAuth(req, res, next)
{
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}