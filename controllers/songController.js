const Playlist = require('../models/playlists')
const { findById } = require('../models/songs')
const Song = require('../models/songs')


let create = (req,res)=>{
    Song.create(req.body, (err,song)=>{
        if(err){
            res.status(400).json(err)
        }
        Playlist.findById(req.params.playlistID, (err,pl)=>{
            pl.songs.push(song)
            pl.save()
            res.render('show', {title: pl.name, name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs })    })
        })
        

    }


let show = (req,res)=>{
    Song.findById(req.params.id, (err,song)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        // Deletes https://youtu.be/ only works if user copys URL
        let linkId = song.link.substr(17)
        res.render('songs', {title: song.name, name: song.name, artist: song.artist, genre: song.genre,link: song.link, linkId: linkId, rating: song.rating, playlistID: req.params.playlistID, songID: req.params.id })
    })    
}

let update = (req,res)=>{
    Playlist.findById(req.params.playlistID, (err,pl)=>{
         //THIS WAS THE BUG FIX THAT I HAVE BEEN TRYING TO FIGURE OUT 
        const mySong = pl.songs.findIndex(songs => songs._id.toString() === req.params.id)
        Song.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,song)=>{
            pl.songs.push(song)
            pl.songs.splice(mySong, 1)
            song.save()
            pl.save()
            res.redirect(`/playlists/${req.params.playlistID}/songs/${req.params.id}`)
                
                // res.render('show', {name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs })
               
        })
        
    })
}

let destroy = (req,res)=>{
   Playlist.findById(req.params.playlistID, (err,pl)=>{
        if(err){
            res.status(400).json(err)
            return
        }
    const mySongIndex = pl.songs.findIndex(songs => songs._id.toString() === req.params.id)
        Song.findByIdAndDelete(req.params.id, (err,song)=>{
            if(err){
                res.status(400).json(err)
                return
            }
            pl.songs.splice(mySongIndex, 1)
            pl.save()
            res.render('show', {title: pl.name, name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs })
        })
    })
}

    module.exports = {
        create,
        show,
        destroy,
        update
    }