const express = require('express');
const mongoose = require('mongoose');

const Audio = require('../models/audios')


//? Global variables
const router = express.Router()


//? Routes
router.get('/', (req, res) => {
    res.send('Groovy');
})


router.post('/get', (req, res) => {
    Audio.find({user: req.body.id}, (err, audio) => {
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
        user: req.body.id,
        title: req.body.title,
        audio: req.body.audio,
        img: req.body.img
    })

    audio.save()

    console.log('Audio Saved Successfully!!')
    res.json({'msg':'Audio Saved Successfully!!'})
})


module.exports = router