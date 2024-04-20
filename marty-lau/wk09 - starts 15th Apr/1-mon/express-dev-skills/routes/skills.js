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

router.get("/new", skillsCtrl.new);

// GET /skills/:id
router.get("/:id", skillsCtrl.show);
router.get("/:id/edit", skillsCtrl.edit);
router.put("/:id", skillsCtrl.update);

router.post("/", skillsCtrl.create);

router.delete("/:id", skillsCtrl.delete);

module.exports = router;
