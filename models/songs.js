const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    name: String,
    genre: String,
    artist: String,
    rating: {type:Number, min: 1, max: 5, default: 5},
    link: String
})

const Song = mongoose.model("Song", songSchema)

module.exports = Song