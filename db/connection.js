const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/playlists', {
    useNewUrlParser: true
})

const db = mongoose.connection

db.on('connected', () =>{
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`)
})