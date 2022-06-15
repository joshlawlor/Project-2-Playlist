const express = require('express')
const router = express.Router()
const songCtrl = require('../controllers/songController')

//Create Route
router.post('/:playlistID/songs', songCtrl.create)
//EDIT
router.put('/:playlistID/songs/:id', songCtrl.update)
////DELETE
router.delete('/:playlistID/songs/:id', songCtrl.destroy)
//Show Route
router.get('/:playlistID/songs/:id', songCtrl.show)


module.exports = router