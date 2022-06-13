const Playlist = require('../models/playlists')
const { findById } = require('../models/songs')
const Song = require('../models/songs')


let create = (req,res)=>{
    Song.create(req.body, (err,song)=>{
        if(err){
            res.status(400).json(err)
        }
        console.log(song.id)
        Playlist.findById(req.params.playlistID, (err,pl)=>{
            pl.songs.push(song)
            pl.save()
            // console.log(pl)
            // console.log(pl.songs)
            res.render('show', {name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs })    })
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
        res.render('songs', {name: song.name, artist: song.artist, genre: song.genre, rating: song.rating, playlistID: req.params.playlistID, songID: req.params.id })
    })
    // console.log(Playlist.songs)
    

}

let update = (req,res)=>{
    Playlist.findById(req.params.playlistID, (err,pl)=>{
        console.log(`*******START*********`)
        const mySong = pl.songs.find(songs => songs._id.toString() === req.params.id)
                //Find playlist that song you are updating is inside
            
            console.log(`Before update: ${mySong.name}`)
                Song.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err,song)=>{
                
                if(song._id.toString() === req.params.id){
                    mySong.name = song.name
                    mySong.artist = song.artist
                    mySong.genre = song.genre
                    mySong.rating = song.rating
                }
                console.log(`After Update:${mySong.name}`)
                console.log(`******END**********`)
                song.save()
                pl.save()
                // res.redirect(`/playlists/${req.params.playlistID}`)
                
                res.render('show', {name: pl.name, info: pl.info, playlistID: req.params.playlistID, songs: pl.songs })
                //THIS WAS THE BUG FIX THAT I HAVE BEEN TRYING TO FIGURE OUT ALL
                // res.render('songs', {name: mySong.name, artist: song.artist, genre: song.genre, rating: song.rating, playlistID: req.params.playlistID, songID: req.params.id 
                // })  
        

        })
        
    })
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
        destroy,
        update
    }