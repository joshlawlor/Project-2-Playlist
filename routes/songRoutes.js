const express = require('express')
const router = express.Router()
const songCtrl = require('../controllers/songController')



//Create Route
router.post('/:playlistId/songs', songCtrl.create)
////DELETE
router.delete('/:playlistId/songs/:id', songCtrl.destroy)
//Show Route
router.get('/:playlistId/songs/:id', songCtrl.show)


module.exports = router