const express = require('express')
const router = express.Router()
const detailsCtrl = require('../controllers/details')

router.post('/flights/:id', detailsCtrl.add)

module.exports = router