var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

/* GET users listing. */
router.get('/', flightsCtrl.all);
router.get('/new', flightsCtrl.new)

// TASK Add router.post for new flight entry

module.exports = router;
