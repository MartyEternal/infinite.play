const Skill = require("../models/Skill");

function index(req, res) {
  res.render("skills/index", {
    categories: Skill.getSkillsCategory(),
  });
}

function show(req, res) {
  const category = req.params.category;
  res.render("skills/show", {
    category,
    skills: Skill.getSkills(category),
  });
}

module.exports = {
  index,
  show,
};
