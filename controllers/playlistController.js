const Playlist = require('../models/playlists')

let index = (req,res)=>{
    Playlist.find({}, (err,playlists)=>{
        if(err){
            res.status(400).json(err)
        }
        res.render('index', {index: playlists})
    })
}


let getNew = (req,res)=>{
    res.render('new')
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
    Playlist.findById(req.params.id, (err,pl)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.render('show', {name: pl.name, info: pl.info, id: req.params.id })
    })
}

module.exports = {
    index,
    getNew,
    create,
    show
}