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


module.exports = {
    index,
    getNew
}