const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
    name: String,
    info: String
})

const Playlist = mongoose.model("Playlist", playlistSchema)

module.exports = Playlist