const skills = [
  { id: 1, skill: "HTML", done: true },
  { id: 2, skill: "CSS", done: true },
  { id: 3, skill: "Java Script", done: true },
  { id: 4, skill: "Front-End", done: true },
  { id: 5, skill: "Express", done: false },
  { id: 6, skill: "React", done: false },
  { id: 7, skill: "Back-End", done: false },
  { id: 8, skill: "Full-Stack", done: false },
];

module.exports = {
  getAll,
  getOne,
  create,
  deleteOne,
  update,
};

function getOne(id) {
  id = parseInt(id);
  return skills.find((skill) => skill.id === id);
}

function getAll() {
  return skills;
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  skills.push(skill);
}

function deleteOne(id) {
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}

function update(id, updateSkill) {
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  if (idx !== -1) {
    skills[idx].skill = updateSkill.skill;
    skills[idx].done = updateSkill.done;
  }
}
