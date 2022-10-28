const mongoose = require('mongoose')
const datetime = require('node-datetime')


let audioSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {type: String, required: true},
    title: {type: String, required: true},
    time: {type: String, default: datetime.create().format('H:M d-m-Y '), required: true},
    audio: {type: Object, required: true}
})

module.exports = mongoose.model('audios', audioSchema)