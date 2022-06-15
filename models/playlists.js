const mongoose = require('mongoose')

const playlistSchema = new mongoose.Schema({
    name: String,
    info: String,
    songs: []
    // songs: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'Song'
    // }
    
})

const Playlist = mongoose.model("Playlist", playlistSchema)

module.exports = Playlist