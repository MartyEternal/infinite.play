var express = require('express');
var router = express.Router();

//Require the controller that exports Skills CRUD functions
var skillsCtrl = require('../controllers/skills');

// All actual paths start with "/skills"

// GET /skills
router.get('/', skillsCtrl.index);

// GET / skills/new
router.get('/new', skillsCtrl.new);

// GET /skills/:id
router.get('/:id', skillsCtrl.show);

// POST /skills
router.post('/', skillsCtrl.create)

//Delete /skills/:id
router.delete('/:id', skillsCtrl.delete);

//GET /skills/:id/edit
router.get('/edit/:id', skillsCtrl.edit);

//PUT /skills/:id
router.put('/:id', skillsCtrl.update);



module.exports = router;

