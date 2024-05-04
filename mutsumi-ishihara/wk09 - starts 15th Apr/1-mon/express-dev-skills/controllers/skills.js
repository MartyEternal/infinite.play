const Skill = require("../models/skill")

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    edit,
    updateSkill,
    delete: deleteSkill
}

function index(request, response) {
    response.render("skills/index", {
        skills: Skill.getAll()
    })
}

function show(request, response) {
    response.render("skills/show", {
        skill: Skill.getOne(request.params.id)
    })
}

function newSkill(request, response) {
    response.render("skills/new")
}

function create(request, response) {
    console.log(request.body)
    Skill.create(request.body)
    response.redirect("/skills")
}

function edit(request, response) {
    response.render("skills/edit", {
        skill: Skill.getOne(request.params.id),
        title: "Edit skill"
    })
}

function updateSkill(request, response) {
    Skill.updateThisSkill(request.params.id, request.body)
    response.redirect("/skills")
}

function deleteSkill(request, response) {
    console.log(request.body)
    Skill.deleteOne(request.params.id)
    response.redirect("/skills")
}