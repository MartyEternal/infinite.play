var express = require('express');
var router = express.Router();

const skillsCtrl = require("../controllers/skills")

/* GET skills listing. */
router.get('/', skillsCtrl.index);
router.get("/new", skillsCtrl.new)
router.get("/:id", skillsCtrl.show)
router.post("/", skillsCtrl.create)
router.get("/edit/:id", skillsCtrl.edit)
router.put("/edit/:id",skillsCtrl.updateSkill)
router.delete("/:id", skillsCtrl.delete)

module.exports = router;
