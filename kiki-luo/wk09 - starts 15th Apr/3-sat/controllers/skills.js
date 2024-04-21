const Devskill = require('../model/skill.js');

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
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

function newSkill(req, res) {
    res.render('skills/new', {
        title: 'New Dev Skill'
    })
}

function create(req, res) {
    Devskill.create(req.body)
    res.redirect('/skills')
}

function deleteSkill(req, res) {
    Devskill.deleteOne(req.params.skill)
    res.redirect('/skills')
}

function edit(req, res) {
    res.render('skills/edit', {
        devSkill: Devskill.getOne(req.params.skill),
        title: 'Edit Dev Skill'
    })
}

function update(req, res) {
    Devskill.updateOne(req.params.skill, req.body)
    res.redirect(`/skills/${req.params.skill}`)
   
}