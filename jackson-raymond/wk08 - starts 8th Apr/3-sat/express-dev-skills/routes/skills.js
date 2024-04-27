var express = require('express');
var router = express.Router();
var skillsController = require("../controller/skills")

router.get("/", skillsController.index)
router.get('/new', skillsController.new)
router.get("/:id", skillsController.show)
router.get("/edit/:id", skillsController.edit) 
router.put("/:id", skillsController.update)
router.post("/", skillsController.create)
router.post("/", skillsController.update)
router.delete("/:id", skillsController.delete)

module.exports = router