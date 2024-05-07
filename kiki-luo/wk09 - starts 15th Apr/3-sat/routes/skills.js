var express = require('express');
var router = express.Router();


const skillsCtrl = require('../controllers/skills')

router.get('/', skillsCtrl.index)
router.get('/:skill/edit', skillsCtrl.edit)
router.put('/:skill', skillsCtrl.update)
router.get('/new', skillsCtrl.new)
router.get('/:skill', skillsCtrl.show)
router.post('/', skillsCtrl.create)
router.delete('/:skill', skillsCtrl.delete)

module.exports = router;