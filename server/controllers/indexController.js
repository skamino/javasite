let express = require('express');
let router = express.Router();
let mogoose = require('mongoose');
let passport = require('passport');

LocalStrategy = require('passport-local').Strategy;
let url = require('url');

let UserModel = require('../models/user');
let User = UserModel.User;

passport.use(new LocalStrategy(
    function(username, password, done) {
        User.findOne({ uname: username}, function(err, user) {
            if(err) {return done(err); }
            if(!user) {
                return done(null, false, {message: 'Incorrect username.'});
            }
            if(!user.validPassword(password)) {
                return done(null, false, {message: 'in'});
            }
            return done(null, user);
        });
    }
));

module.exports.renderIndex = (req, res, next) => {
    res.render('index', { title: 'Javasite' });
}
module.exports.renderCreateAccount = (req, res, next) => {
    res.render('createAccount', { title: "Create Account" });
}
module.exports.processCreateAccount = (req, res, next) => {
    let tempUser = User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        });
        console.log(tempUser);
        User.register(tempUser, req.body.password, (err) => {
            if(err)
            {
                 if(err.name == "UserExistsError"){
                 req.flash(
                        'registerMessage',
                        'Registration Error: User Already Exists!'
                 );
                 console.log("Error: User Already Exists");
             }
                return res.render('createAccount', {
                    title: 'Register',
                    messages: req.flash('register'),
                    displayName: req.user ? req.user.displayname: ''   
                });
            }
            else
            {
                 //successful registration to the confirm account details page
                return passport.authenticate('local')(req, res, ()=>{
                    res.render('confCreateAccount', { title: "Account Confirmation", username: req.username, email: req.email })
                })
            }
        });  
}
module.exports.renderLogin = (req, res, next) => {
    res.render('login', { title: "Login" });
}
module.exports.processLogin = (req, res, next) => {
    // passport login
    //console.log(req.body);

    passport.authenticate('local', 
    (err, user, info) => {
        if(err)
        {
            return next(err);
        }
        console.log(user);
        if(!user)
        {
            return res.redirect('/login');
        }
        req.login(user, (err) => {
            if(err){
                return next(err);
            }    
            else
            {
                console.log("logged in successful");
                res.redirect('/loggedInHome');
                //res.render('loggedInHome', { title: "Javasite" });
            }
        });
    })(req, res, next);

}
module.exports.renderLoggedInHome = (req, res, next) => {
    res.render('loggedInHome', { title: "Javasite" });
}
module.exports.performLogout = (req, res, next) => {
    req.logout(function(err) {
        if(err){
            return next(err);
        }
        res.redirect('/');
    });
}


