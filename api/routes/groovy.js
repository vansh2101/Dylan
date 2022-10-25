const express = require('express');
const mongoose = require('mongoose');

const Audio = require('../models/audios')


//? Global variables
const router = express.Router()


//? Routes
router.get('/', (req, res) => {
    res.send('Groovy');
})


router.get('/get', (req, res) => {
    Audio.find({user: req.user.id}, (err, audio) => {
        if (!err){
            res.json(audio);
        }
        else {
            res.json({'error': err.message});
        }
    }).sort({time: -1});
})


router.post('/post', (req, res) => {
    const audio = new Audio({
        _id: new mongoose.Types.ObjectId,
        user: req.user.id,
        title: req.body.title,
        audio: req.body.audio
    })

    audio.save()

    console.log('Audio Saved Successfully!!')
    res.json({'msg':'Audio Saved Successfully!!'})
})


module.exports = router