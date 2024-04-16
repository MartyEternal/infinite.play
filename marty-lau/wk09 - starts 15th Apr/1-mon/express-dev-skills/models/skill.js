const skills = [
    {id: 1, skill: "Python Programming", skillLevel: "Master", yearsExperience: 10, blurb: "Experienced in writing robust and efficient Python code for data analysis, web development, and automation."},
    {id: 2, skill: "Web Development", skillLevel: "Advanced", yearsExperience: 4, blurb: "Skilled in using HTML, CSS, and JavaScript to build responsive and interactive websites."},
    {id: 3, skill: "Machine Learning", skillLevel: "Intermediate", yearsExperience: 3, blurb: "Capable of designing and implementing machine learning models using libraries such as TensorFlow and scikit-learn."},
    {id: 4, skill: "Database Management", skillLevel: "Guru", yearsExperience: 25, blurb: "Proficient in SQL and database design, experienced with MySQL, PostgreSQL, and MongoDB."},
    {id: 5, skill: "Version Control", skillLevel: "Master", yearsExperience: 15, blurb: "Experienced in writing robust and efficient Python code for data analysis, web development, and automation."},

]

module.exports = {
    getAll,
    getOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    id = parseInt(id);
    return skills.find(function(skill) {
        return skill.id === id;
    });
};