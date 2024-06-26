var express = require("express");
var router = express.Router();

const flightController = require("../controllers/flights");

/* GET users listing. */
router.get("/", flightController.index);
router.get("/new", flightController.new);
router.post("/", flightController.create);

module.exports = router;
