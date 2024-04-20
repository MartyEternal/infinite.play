const devSkills = [
    {skill: "Programming Language", abilities: ['JavaScript', 'Python', 'Java', 'C#'], category: 'Technical'},
    {skill: "Web Development", abilities: ['HTML', 'CSS', 'JavaScript', 'React', 'Vue'],category: 'Technical'},
    {skill: "Database",abilities: ['MySQL', 'MongoDB'],category: 'Technical' },
    {skill: 'Problem-solving', category: 'Non-Technical'},
    {skill: 'Communication', category: 'Non-Technical'},
    {skill: 'Fast-Learning', category: 'Non-Technical'},
];

module.exports = {
    getAll,
    getOne,
}

function getAll() {
    return devSkills;
}

function getOne(skill) {
   return devSkills.find(devSkill => devSkill.skill === skill);
}