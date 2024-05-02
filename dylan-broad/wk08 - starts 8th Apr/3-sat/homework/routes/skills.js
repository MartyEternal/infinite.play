var express = require("express");
var router = express.Router();
var skillsCtrl = require("../controllers/skills");

module.exports = router;

router.get("/", skillsCtrl.index);

router.get("/new", skillsCtrl.new);

router.get("/:id", skillsCtrl.show);

router.get("/:id/update", skillsCtrl.edit);

router.put("/:id", skillsCtrl.update);

router.post("/", skillsCtrl.create); // add this route
router.delete("/:id", skillsCtrl.delete);
