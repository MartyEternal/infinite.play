var express = require('express');
var router = express.Router();

const ticketsCtrl = require("../controllers/tickets");

router.post("/:id/tickets", ticketsCtrl.create);

module.exports = router;