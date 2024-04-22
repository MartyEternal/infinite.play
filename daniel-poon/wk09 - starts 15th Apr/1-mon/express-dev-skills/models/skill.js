const skills = [
{id: 1, skill: "JavaScript", description: "hi", imgUrl: "https://durableprogramming.com/wp-content/uploads/2023/04/JavaScript-logo.png"},
{id: 2, skill: "Express", description: "hi", imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxU_u44DpbT-IfWu2brkRSU0D1HIGYYUnFpQoI1gHOUnfPI7aQcBCpXth9_dqPVwv2L4Y&usqp=CAU"},
{id: 3, skill: "CSS", description: "hi", imgUrl: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-png-transparent.png"},
{id: 4, skill: "HTML", description: "hi", imgUrl: "https://s3.amazonaws.com/tf-nightingale/2022/12/html1.jpg"},
{id: 5, skill: "React", description: "hi", imgUrl: "https://cdn.freebiesupply.com/logos/large/2x/react-logo-png-transparent.png"},
{id: 6, skill: "Flutter", description: "hi", imgUrl: "https://assets-global.website-files.com/5ee12d8d7f840543bde883de/5ef3a1148ac97166a06253c1_flutter-logo-white-inset.svg"},
]

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    updateOne,
};

function getAll() {
    return skills;
}

function getOne(id) {
id = parseInt(id)
return skills.find(skill => skill.id === id)
}

function create(skill) {
    skill.id = Date.now() % 10000000
    skills.push(skill);
}

function deleteOne(id) {
    id = parseInt(id)
    const idx = skills.findIndex(skill => skill.id === id)
    skills.splice(idx, 1)
}

function updateOne(id, updatedSkill) {
    id = parseInt(id)
    const skill = skills.find(skill => skill.id === id)
    Object.assign(skill, updatedSkill)
}

