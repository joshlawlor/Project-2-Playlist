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
            res.render('show', {name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs })    })
        })
        

    }


let show = (req,res)=>{
    Song.findById(req.params.id, (err,song)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('songs', {name: song.name, artist: song.artist, genre: song.genre, rating: song.rating, playlistID: req.params.playlistID, songID: req.params.id })
    })    
}

let update = (req,res)=>{
    Playlist.findById(req.params.playlistID, (err,pl)=>{
        const mySong = pl.songs.findIndex(songs => songs._id.toString() === req.params.id)
        Song.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,song)=>{
            pl.songs.push(song)
            pl.songs.splice(mySong, 1)
            song.save()
            pl.save()
            // res.redirect(`/playlists/${req.params.playlistID}`)
                
                res.render('show', {name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs })
                //THIS WAS THE BUG FIX THAT I HAVE BEEN TRYING TO FIGURE OUT ALL
        })
        
    })
}

let destroy = (req,res)=>{
   Playlist.findById(req.params.playlistID, (err,pl)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        console.log(`****START****`)
        console.log(req.params.id)
    const mySongIndex = pl.songs.findIndex(songs => songs._id.toString() === req.params.id)
    const mySong = pl.songs.find(songs => songs._id.toString() === req.params.id)
    Song.findByIdAndDelete(req.params.id, (err,song)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        pl.songs.splice(mySongIndex, 1)
        pl.save()
        console.log('Saved')
        res.render('show', {name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs })
        console.log(`****END****`)

    })
})
}
    module.exports = {
        create,
        show,
        destroy,
        update
    }