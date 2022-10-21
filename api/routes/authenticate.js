const express = require('express');
const passport = require('passport');
const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/users');


//? Global variables
const router = express.Router();


//? Routes
router.get('/', (req, res) => {
    res.send('Home');
});


router.post('/login', passport.authenticate('local',{
    successRedirect: '/',
    failureRedirect: '/auth',
    failureFlash: true,
}));


router.delete('/logout', (req,res) => {
    req.logOut();
    res.redirect('/');
});


router.post('/register', function (req, res) {
    try {
        User.findOne({username: req.body.username.toLowerCase()}, (error, result)=>{
            if (result == null){
                User.findOne({email: req.body.email.toLowerCase()}, async (err, re)=>{
                    if (re==null){
                        if (req.body.pass1 === req.body.pass2){
                            const hashed_pass = await bcrypt.hash(req.body.pass1, 10);
            
                            const data = new User({
                                _id: new mongoose.Types.ObjectId,
                                username: req.body.username.trim().toLowerCase(),
                                name: req.body.name.trim(),
                                email: req.body.email.trim().toLowerCase(),
                                password: hashed_pass,
                            });
                            data.save();
                            req.flash('msg', 'User Registered Successfully!!')
                            res.redirect('/login')
                        }

                        else{
                            req.flash('msg', 'Passwords don\'t match')
                            res.redirect('/register')
                        }
                    }

                    else {
                        req.flash('msg', 'An Account with this email already exist')
                        res.redirect('/register')
                    }
                })
            }

            else {
                req.flash('msg', 'Username Taken')
                res.redirect('/register')
            }
        })
    }
    catch {
        res.redirect('/register')
    };
});



module.exports = router