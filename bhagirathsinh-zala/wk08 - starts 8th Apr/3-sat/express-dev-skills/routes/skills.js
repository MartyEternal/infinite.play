var express = require("express");
var router = express.Router();

const skillsController = require("../controllers/skills");
/* GET users listing. */
router.get("/", skillsController.index);
router.get("/:category", skillsController.show);

module.exports = router;
