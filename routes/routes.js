const express = require('express');

const router = express.Router()

module.exports = router;

router.post('/blogs', (req, res) => {
    res.send('Post API')
})

router.get('/blogs', (req, res) => {
    res.send('Get All API')
})

router.get('/blogs/:id', (req, res) => {
    res.send('Get by ID API')
})

router.put('/blogs/:id', (req, res) => {
    res.send('Update by ID API')
})

router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})
