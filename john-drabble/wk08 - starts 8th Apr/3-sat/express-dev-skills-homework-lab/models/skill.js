const skills = [
  { id: "1", name: "John", specialism: "HTML", location: "Sydeny" },
  { id: "2", name: "Jane", specialism: "CSS", location: "Melbourne" },
  { id: "3", name: "Richard", specialism: "JavaScript", location: "Sydney" },
  { id: "4", name: "Dave", specialism: "Python", location: "Sydney" },
  { id: "5", name: "Diane", specialism: "SQL", location: "Melbourne" },
];

function getAll() {
  return skills;
}

function getOne(id) {
  return skills.find((s) => s.id === id);
}

module.exports = {
  getAll,
  getOne,
};
