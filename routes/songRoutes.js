const express = require('express')
const router = express.Router()
const songCtrl = require('../controllers/songController')


//
//Create Route
router.post('/playlists/:id/songs', songCtrl.create)
//Show Route
// router.get('/playlists/:id/songs/:id', songCtrl.show)

module.exports = router