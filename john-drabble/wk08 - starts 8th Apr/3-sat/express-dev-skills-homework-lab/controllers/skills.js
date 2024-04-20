const Skill = require("../models/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  edit,
  create,
  update,
  delete: deleteSkill,
};

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "Coder Skills",
  });
}

function show(req, res) {
  res.render("skills/show", {
    skills: Skill.getOne(req.params.id),
  });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "New Skill" });
}

function edit(req, res) {
  res.render("skills/edit", {
    skills: Skill.getOne(req.params.id),
  });
}

function create(req, res) {
  console.log(req.body);
  Skill.create(req.body);
  res.redirect("/skills");
}

function update(req, res) {
  // console.log("UPDATE CONTROLLER:", req.params.id, req.body);
  Skill.update(req.params.id, req.body);
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}
