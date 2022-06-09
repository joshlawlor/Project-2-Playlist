const Playlist = require('../models/playlists')
const { findById } = require('../models/songs')
const Song = require('../models/songs')


let create = (req,res)=>{
    Song.create(req.body, (err,song)=>{
        if(err){
            res.status(400).json(err)
        }
        console.log(song.id)
        Playlist.findById(req.params.id, (err,pl)=>{
            pl.songs.push(song)
            pl.save()
            // console.log(pl)
            // console.log(pl.songs)
        })
        res.redirect(song.id)
    })

    }


let show = (req,res)=>{
    console.log(`Song show route, req ID:${req.params.id}`) // Req.params.id is finding the Song ID not the Playlist ID
    //Need to find song id and display information
    Song.findById(req.params.id, (err,song)=>{
        if(err){
            res.status(400).json(err)
            return
        }
       console.log(song.name)
       console.log(req.params.playlistId)
        res.render('songs', {name: song.name, artist: song.artist, genre: song.genre, rating: song.rating, playlistID: req.params.playlistId })
    })
    // console.log(Playlist.songs)
    

}

let destroy = (req,res)=>{
    // Playlist.findByIdAndDelete(req.params.id, (err,pl)=>{
    //     if(err){
    //         res.status(400).json(err)
    //         return
    //     }
    //     res.redirect('/playlists')
    // })
}
    module.exports = {
        create,
        show,
        destroy
    }