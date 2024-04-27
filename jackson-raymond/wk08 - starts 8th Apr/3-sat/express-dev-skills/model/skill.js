const skills = [
    {id: 1000, skill: "Front end", rating: 7},
    {id: 1001, skill: "JavaScript", rating: 7},
    {id: 1002, skill: "Nodejs", rating: 6},
    {id: 1003, skill: "Express", rating: 3},
    {id: 1004, skill: "Python", rating: 2},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    skills.rating = 1
    skills.push(skill)
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function update (id, updatedSkill) {
    id = parseInt(id)
    const idx = skills.findIndex((skill) => skill.id === id)
    if (idx !== -1) {
        skills[idx].skill = updatedSkill.skill
        skills[idx].rating = updatedSkill.rating === 1
    }
}