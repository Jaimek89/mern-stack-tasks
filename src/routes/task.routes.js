// Define the URL for the server - CRUD
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        status: 'API Works'
    })
})

module.exports = router