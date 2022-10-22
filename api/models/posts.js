const mongoose = require('mongoose')
const datetime = require('nodes-datetime')


let postSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {type: String, required: true, unique: true},
    time: {type: String, default: datetime.create().format('H:M d-m-Y '), required: true},
    audio: {type: String, required: true}
})

module.exports = mongoose.model('posts', postSchema)