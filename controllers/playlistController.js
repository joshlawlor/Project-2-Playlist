const Playlist = require('../models/playlists')
const Song = require('../models/songs')

let index = (req,res)=>{
    Playlist.find({}, (err,playlists)=>{
        if(err){
            res.status(400).json(err)
        }
        let indexTitle = "Home"
        res.render('index', {title: indexTitle, index: playlists, playlistID: req.params.playlistID})
    })
}


let getNew = (req,res)=>{
    res.render('new', {title: "New Playlist"})
}

let create = (req,res)=>{
    Playlist.create(req.body, (err,pl)=>{
        if(err){
            res.status(400).json(err)
        }
        res.redirect(pl.id)
    })
}

let show = (req,res)=>{
    Playlist.findById(req.params.playlistID, (err,pl)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('show', {title: pl.name, name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs})
    })
}

let update = (req,res)=>{
    Playlist.findByIdAndUpdate(req.params.playlistID, req.body, {new: true}, (err,pl)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('show', {title: pl.name, name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs })
    })
}

let destroy = (req,res)=>{
    Playlist.findByIdAndDelete(req.params.playlistID, (err,pl)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.redirect('/playlists')
    
    })
}

module.exports = {
    index,
    getNew,
    create,
    show,
    update,
    destroy
}