__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(__path + '/views/home.html')
})

router.get('/api', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})

router.get('/api/game', (req, res) => {
    res.sendFile(__path + '/views/game.html')
})

router.get('/api/donation', (req, res) => {
    res.sendFile(__path + '/views/z.html')
})

router.get('/api/credits', (req, res) => {
    res.sendFile(__path + '/views/credts.html')
})

router.get('/api/xpeak', (req, res) => {
    res.sendFile(__path + '/views/xpeak.html')
})

module.exports = router
