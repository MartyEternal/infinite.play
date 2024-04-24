var express = require("express");
var router = express.Router();

const skillsController = require("../controllers/skills");

// GET /skills
router.get("/", skillsController.index);

// GET /skills/new
router.get("/new", skillsController.new);

// GET /skills/:id
router.get("/:id", skillsController.show);

// POST /skills
router.post("/", skillsController.create);

// DELETE skill by id
router.delete("/:id", skillsController.delete);

// GET /skills/:id/edit
router.get("/:id/edit", skillsController.edit);

// UPDATE skill by id
router.put("/:id", skillsController.update);

module.exports = router;
