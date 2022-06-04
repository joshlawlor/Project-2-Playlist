const express = require('express')
const router = express.Router()
const pCtrl = require('../controllers/playlistController')

//INDEX ROUTE
router.get('/', pCtrl.index)

//NEW ROUTE
router.get('/new', pCtrl.getNew)
//CREATE ROUTE
router.post('/', pCtrl.create)
//EDIT ROUTE

//DELETE ROUTE

//SHOW ROUTE
router.get('/:id', pCtrl.show )




module.exports = router