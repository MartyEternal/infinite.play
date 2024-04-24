const skills = [
  { skills: "Learn HTML", done: true },
  { skills: "Learn CSS", done: true },
  { skills: "Learn Java Script", done: true },
  { skills: "Learn Front-End", done: true },
  { skills: "Learn Express", done: false },
  { skills: "Learn React", done: false },
  { skills: "Learn Back-End", done: false },
  { skills: "Learn Full-Stack", done: false },
];

module.exports = {
  getAll: function () {
    return skills;
  },
};
