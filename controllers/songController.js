const Playlist = require('../models/playlists')

let create = (req,res)=>{
    Playlist.findById(req.params.id, (err,pl)=>{
        pl.songs.push(req.body)
        console.log(pl.songs)
        pl.save((err)=>{
            if(err){
                res.status(400).json(err)
            }
            res.redirect(`/playlists/${pl._id}/`)
        })
        
        })
    }


    module.exports = {
        create
    }