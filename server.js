const express = require('express')
const app = express()
const PORT = 5000

const playlistRoutes = require('./routes/playlistRoutes')
const songRoutes =  require('./routes/songRoutes')
require('./db/connection')

//VIEW ENGINE
app.set('view engine' , 'ejs')


//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const methodOverride = require('method-override')
app.use(methodOverride('_method'))


//ROUTES
app.use('/playlists', playlistRoutes)
app.use('/playlists', songRoutes)

app.listen(PORT, ()=>{
    console.log(`It's alive! On PORT:${PORT}`)
})