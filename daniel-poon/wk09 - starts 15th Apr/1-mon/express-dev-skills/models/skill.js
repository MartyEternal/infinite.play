const skills = [
{id: 1, name: "JavaScript"},
{id: 2, name: "Mongo-db"},
{id: 3, name: "Express"},
{id: 4, name: "CSS"},
{id: 5, name: "HTML"},
{id: 6, name: "React"},
{id: 7, name: "Flutter"},
]

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
}

function getOne(id) {
id = parseInt(id)
return skills.find(skill => skill.id === id)
}

