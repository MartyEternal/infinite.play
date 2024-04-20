const skills = [
  { id: 1, name: "John", specialism: "HTML", location: "Sydeny" },
  { id: 2, name: "Jane", specialism: "CSS", location: "Melbourne" },
  { id: 3, name: "Richard", specialism: "JavaScript", location: "Sydney" },
  { id: 4, name: "Dave", specialism: "Python", location: "Sydney" },
  { id: 5, name: "Diane", specialism: "SQL", location: "Melbourne" },
];

module.exports = {
  getAll,
  getOne,
  create,
  update,
  deleteOne,
};

function getAll() {
  return skills;
}

function getOne(id) {
  var id = parseInt(id);
  return skills.find((s) => s.id === id);
}

function create(skill) {
  skill.id = Date.now() % 1000000;
  if (skill.name == "" && skill.specialism == "" && skill.location == "") {
    return;
  }
  skills.push(skill);
}

function update(id, body) {
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  const skill = skills.find((s) => s.id === id);
  // console.log(id, body);

  const updatedSkill = {
    name: body.name,
    specialism: body.specialism,
    location: body.location,
    id: skill.id,
  };

  // console.log("DATA:", updatedSkill);
  skills.splice(idx, 1, updatedSkill);
}

// Alternatively, this works too:
// function update(id, body) {
//   id = parseInt(id);
//   const idx = skills.findIndex((skill) => skill.id === id);
//   const skill = skills.find((skill) => skill.id === id);
//   console.log(id, body);

//   const { name, specialism, location } = body;
//   skill.id = id;
//   skill.name = name;
//   skill.specialism = specialism;
//   skill.location = location;
//   data = { id, name, specialism, location };

//   console.log("DATA:", data);
//   skills.splice(idx, 1, data);
// }

function deleteOne(id) {
  // All properties attached to req.params are strings!
  id = parseInt(id);
  const idx = skills.findIndex((skill) => skill.id === id);
  skills.splice(idx, 1);
}
