const express = require('express');
const mongoose = require('mongoose');

const User = require('../models/users')


//? Global variables
const router = express.Router()


//? Routes
router.get('/', (req, res) => {
    res.send('User');
})


router.post('/get', (req, res) => {
    User.findOne({username: req.body.id}, (err, user) => {
        if (!err){
            res.json(user);
        }
        else {
            res.json({'error': err.message});
        }
    });
})


module.exports = router