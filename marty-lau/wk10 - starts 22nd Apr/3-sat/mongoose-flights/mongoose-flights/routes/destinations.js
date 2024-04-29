const express = require('express');
const router = express.Router();

const destinationsCtrl = require("../controllers/destinations");

router.get("/", destinationsCtrl.create);

module.exports = router;