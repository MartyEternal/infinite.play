const Devskill = require('../model/skill.js');

module.exports = {
    index,
    show,
}

function index(req, res) {
    res.render('skills/index', {
        devSkills: Devskill.getAll()
    }
    )
}

function show(req, res) {
    res.render('skills/show', {
        devSkill: Devskill.getOne(req.params.skill)
    })
}
