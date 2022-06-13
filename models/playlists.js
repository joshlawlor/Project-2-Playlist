const mongoose = require('mongoose')

//EMBEDDED
// const songSchema = new mongoose.Schema({
//     name: String,
//     genre: String,
//     artist: String,
//     rating: {type:Number, min: 1, max: 5, default: 5}
// })

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