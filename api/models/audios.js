const mongoose = require('mongoose')


let audioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {type: String, required: true, unique: true},
    audio: {type: Array, required: true}
})

module.exports = mongoose.model('audios', audioSchema)