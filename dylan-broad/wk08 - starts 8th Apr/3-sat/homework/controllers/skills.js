const Skill = require("../data/skill");

module.exports = {
  index,
  show,
  new: newSkill,
  create,
  delete: deleteSkill,
  edit,
  update,
};

function show(req, res) {
  res.render("skills/show", {
    skill: Skill.getOne(req.params.id),
    // Don't forget to add the comma above
    title: "Skill",
  });
}

function index(req, res) {
  res.render("skills/index", {
    skills: Skill.getAll(),
    title: "All skills",
  });
}

function newSkill(req, res) {
  res.render("skills/new", { title: "New Skill" });
}

function create(req, res) {
  console.log(req.body);
  // The model is responsible for creating data
  Skill.create(req.body);
  // Do a redirect anytime data is changed
  res.redirect("/skills");
}

function deleteSkill(req, res) {
  Skill.deleteOne(req.params.id);
  res.redirect("/skills");
}

function edit(req, res) {
  res.render("skills/update", {
    skill: Skill.getOne(req.params.id),
    title: "Update Skills",
  });
}

function update(req, res) {
  Skill.update(req.params.id, req.body);
  res.redirect("/skills");
}
