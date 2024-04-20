var express = require("express");
var router = express.Router();

var skillsCtrl = require("../controllers/skills");

// router.get("/", skillsCtrl.index);
// router.get("/show/:id", skillsCtrl.show);

router.get("/", skillsCtrl.index);
router.get("/new", skillsCtrl.new);
router.get("/edit/:id", skillsCtrl.edit);
router.get("/show/:id", skillsCtrl.show);
router.post("/", skillsCtrl.create);
router.put("/update/:id", skillsCtrl.update);
router.delete("/:id", skillsCtrl.delete);

module.exports = router;
