const { findById } = require('../models/playlists')
const Playlist = require('../models/playlists')


let create = (req,res)=>{
    Playlist.findById(req.params.id, (err,pl)=>{
        pl.songs.push(req.body)
        pl.save((err)=>{
            if(err){
                res.status(400).json(err)
            }
            res.redirect(`/playlists/${pl._id}/`)
        })
        
        })
    }

let show = (req,res)=>{
    console.log(req.params.id) // Req.params.id is finding the Song ID not the Playlist ID
    //Need to find song id and display information
    Playlist.findById(req.params.id, (err,pl)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.render('songs', {name: pl.songs[0].name, info: pl.info, id: req.params.id, songs: pl.songs })
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