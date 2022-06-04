const express = require('express')
const app = express()
const PORT = 5000


require('./db/connection')








app.listen(PORT, ()=>{
    console.log(`It's alive! On PORT:${PORT}`)
})