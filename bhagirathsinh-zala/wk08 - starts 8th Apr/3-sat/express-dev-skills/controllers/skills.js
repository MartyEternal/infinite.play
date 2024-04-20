const Skill = require("../models/Skill");

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAllSkills(),
    title: "All Skills",
  });
}

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getSkillById(req.params.id),
    title: "Skill Details",
  });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "Add New Skill" });
}

function create(req, res) {
  Skill.addSkill(req.body);
  res.redirect("/skills");
}

function deleteById(req, res) {
  Skill.deleteSkillById(req.params.id);
  res.redirect("/skills");
}

function edit(req, res) {
  const skill = Skill.getSkillById(req.params.id);
  res.render("skills/edit", { skill, title: "Edit Skill" });
}

function updateById(req, res) {
  Skill.updateSkillById(req.params.id, req.body);
  res.redirect("/skills");
}

module.exports = {
  index,
  show,
  create,
  edit,
  new: newSkill,
  delete: deleteById,
  update: updateById,
};
