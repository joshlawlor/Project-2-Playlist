const express = require('express')
const router = express.Router()
const pCtrl = require('../controllers/playlistController')

//INDEX ROUTE
router.get('/', pCtrl.index)

//NEW ROUTE
router.get('/new', pCtrl.getNew)
//CREATE ROUTE

//EDIT ROUTE

//DELETE ROUTE

//SHOW ROUTE





module.exports = router