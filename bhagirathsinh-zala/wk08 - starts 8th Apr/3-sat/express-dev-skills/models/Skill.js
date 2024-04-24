const skills = [
  { id: 1, name: "JavaScript", level: "Intermediate" },
  { id: 2, name: "HTML", level: "Intermediate" },
  { id: 3, name: "CSS", level: "Intermediate" },
  { id: 4, name: "React", level: "Beginner" },
  { id: 5, name: "Node.js", level: "Beginner" },
];

function getAllSkills() {
  return skills;
}

function getSkillById(id) {
  console.log(id);
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function addSkill(skill) {
  skill.id = Date.now() * 1000000;
  console.log("Add Skill: ", skill);
  skills.push(skill);
}

function deleteSkillById(id) {
  id = parseInt(id);

  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

function updateSkillById(id, updatedSkill) {
  id = parseInt(id);

  const idx = skills.findIndex((skill) => skill.id === id);
  // console.log("Updated Skill Details: ", updatedSkill);
  if (idx !== -1) {
    // console.log("Skill ID: ", skills[idx]);
    skills[idx].name = updatedSkill.name;
    skills[idx].level = updatedSkill.level;
  }
}

module.exports = {
  getAllSkills,
  getSkillById,
  addSkill,
  deleteSkillById,
  updateSkillById,
};
