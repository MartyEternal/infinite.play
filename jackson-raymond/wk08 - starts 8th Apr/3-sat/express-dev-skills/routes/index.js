var express = require('express');
var router = express.Router();
const Skill = require("../model/skill")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('skills/index', { title: "Jackson's Dev Skills", skills : Skill.getAll() })
})

module.exports = router
