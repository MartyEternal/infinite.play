var express = require('express');
var router = express.Router();

// All actual paths start with "/skills"
var skillsCtrl = require("../controllers/skills");

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// GET /skills
router.get("/", skillsCtrl.index);

// GET /skills/:id
router.get("/:id", skillsCtrl.show);

module.exports = router;
