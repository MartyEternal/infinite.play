
const skills = [
    {id: 1, name: "html", level: "beginner", experience: "3 months"},
    {id: 2, name: "css", level: "beginner", experience: "3 months"},
    {id: 3, name: "JavaScript", level: "beginner", experience: "3 months"},
    {id: 4, name: "node.js", level: "newbie", experience: "1 week"},
    {id: 5, name: "express", level: "newbie", experience: "1 week"},
    {id: 6, name: "CLI", level: "beginner", experience: "3 months"},
]

module.exports = {
    getAll,
    getOne,
    create,
    updateThisSkill,
    deleteOne
}

function getAll() {
    return skills
}

function getOne(id) {
    id = parseInt(id)
    return skills.find(skill => skill.id === id)
}

function create(skill) {
    // add id
    const lastSkill = skills[skills.length - 1]
    skill.id = lastSkill.id + 1
    // console.log(skill.id)
    skills.push(skill)
}

function updateThisSkill(id, body) {
    // console.log(body)
    id = parseInt(id)
    skills.find(id => { skills.id === id })
    
    const updatedSkill =  {
        id: id,
        name: body.name,
        level: body.level,
        experience: body.experience
    }
    console.log(updatedSkill)
    const index = skills.findIndex(id => {skills.id === id})
    skills.splice(index, 1, updatedSkill)
}

function deleteOne(id) {
    id = parseInt(id)
    const index = skills.findIndex(skill => skill.id === id)
    skills.splice(index, 1)
    // console.log(skills)
}