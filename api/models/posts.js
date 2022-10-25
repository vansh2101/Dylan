const mongoose = require('mongoose')
const datetime = require('node-datetime')


let postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'users'},
    time: {type: String, default: datetime.create().format('H:M d-m-Y '), required: true},
    audio: {type: mongoose.Schema.Types.ObjectId, ref: 'audios'}
})

module.exports = mongoose.model('posts', postSchema)