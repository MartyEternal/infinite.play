const devSkills = [
    {skill: "Programming Language", skillset: 'JavaScript, Python, Java, C#', category: 'Technical'},
    {skill: "Web Development", skillset: 'HTML, CSS, JavaScript, React, Vue', category: 'Technical'},
    {skill: "Database",skillset: 'MySQL, MongoDB', category: 'Technical' },
    {skill: 'Problem-solving', skillset: 'Interpersonal skill', category: 'Non-Technical'},
    {skill: 'Communication', skillset: 'Interpersonal skill', category: 'Non-Technical'},
    {skill: 'Fast-Learning', skillset: 'Interpersonal skill', category: 'Non-Technical'},
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
}

function getAll() {
    return devSkills;
}

function getOne(skill) {
   return devSkills.find(devSkill => devSkill.skill === skill);
}

function create(devSkill) {
    devSkills.push(devSkill)
}

function deleteOne(skill) {
    const Idx = devSkills.findIndex(devSkill => devSkill.skill === skill);
    devSkills.splice(Idx,1)
}

function updateOne(skill, newdevSkill) {
    const skillToUpdate = devSkills.find(devSkill => devSkill.skill === skill)
    skillToUpdate.skill = newdevSkill.skill;
    skillToUpdate.skillset = newdevSkill.skillset;
    skillToUpdate.category = newdevSkill.category;
}
