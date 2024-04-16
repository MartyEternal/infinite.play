const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Redux Toolkit",
    "Styled Component",
    "Bootstrap",
    "jQuery",
    "Tailwind",
  ],
  backend: ["Python", "JavaScript (Node.js)", "Django", "Express.js"],
  databases: ["PostgreSQL", "MongoDB"],
  versionControl: ["Git"],
  testing: ["Jest", "Cypress"],
  deployment: ["AWS", "Heroku", "Render", "GitLab CI"],
  soft: ["problemSolving", "communication", "teamwork", "timeManagement"],
};

function getSkillsCategory() {
  return Object.keys(skills);
}

function getSkills(category) {
  return skills[category];
}

module.exports = {
  getSkillsCategory,
  getSkills,
};
