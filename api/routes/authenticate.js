const express = require('express');
const passport = require('passport');
const mongoose  = require('mongoose');
const bcrypt = require('bcrypt');

const User = require('../models/users');


//? Global variables
const router = express.Router();


//? Routes
router.get('/', (req, res) => {
    res.send('Authentication');
});


router.post('/login', passport.authenticate('local',{
    successRedirect: 'https://groovy.coreisus.com/',
    failureRedirect: 'https://groovy.coreisus.com/login',
    failureFlash: true,
    failureMessage: true
}));


router.delete('/logout', (req,res) => {
    req.logOut();
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
                            console.log('User Registered Successfully!!')
                            res.json({'msg':'User Registered Successfully!!', 'error': false})
                        }

                        else{
                            console.log('Passwords don\'t match');
                            res.json({'msg':'Passwords don\'t match', 'error': true})
                        }
                    }

                    else {
                        console.log('An Account with this email already exist');
                        res.json({'msg':'An Account with this email already exist', 'error': true})
                    }
                })
            }

            else {
                console.log('Username Taken');
                res.json({'msg':'Username Taken', 'error': true})
            }
        })
    }
    catch {
        res.json({'msg': 'some error occured', 'error': true})
    };
});



module.exports = router