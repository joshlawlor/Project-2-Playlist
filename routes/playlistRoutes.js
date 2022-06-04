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
router.put('/:id', pCtrl.update)
//DELETE ROUTE
router.delete('/:id', pCtrl.destroy)
//SHOW ROUTE
router.get('/:id', pCtrl.show )




module.exports = router