const express = require('express');
const mongoose = require('mongoose');

const Post = require('../models/posts')


//? Global variables
const router = express.Router()


//? Routes
router.get('/', (req, res) => {
    res.send('Posts');
})


router.get('/get', (req, res) => {
    Post.find({}, (err, posts) => {
        if (!err){
            res.json(posts);
        }
        else {
            res.json({'error': err.message});
        }
    }).sort({time: -1});
})

router.post('/fetch', (req, res) => {
    Post.find({user: req.body.id}, (err, posts) => {
        if (!err){
            res.json(posts);
        }
        else {
            res.json({'error': err.message});
        }
    }).sort({time: -1});
})


router.post('/post', (req, res) => {
    const posts = new Post({
        _id: new mongoose.Types.ObjectId,
        user: req.body.id,
        audio: req.body.audio,
        title: req.body.title,
        img: req.body.img,
    })

    posts.save()

    console.log('Posted Successfully!!')
    res.json({'msg':'Posted Successfully!!'})
})


module.exports = router