

   // Convention is to name the model in uppercase and singular
 const Skill = require('../models/skill');


  module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update,

  };

  function create(req, res) {
    console.log(req.body);
    Skill.create(req.body);
    //redirect to the index page
    res.redirect('/skills');
  }
  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll(),
      title: "All Skills"
    });
  }

  function show(req, res) {
    res.render('skills/show', {
      skill: Skill.getOne(req.params.id),
      title: "Skill Details"
    });
  }


  function newSkill(req, res) {
    console.log(req,"here")
    res.render('skills/new', {
      title: "Add Skill",
    });
  }

  function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
  }

  function edit(req, res) {
    res.render('skills/edit', {
      skill: Skill.getOne(req.params.id),
      title: "Edit Skill"
    });
  }

  function update(req, res) {
    Skill.updateOne(req.params.id, req.body);
    res.redirect(`/skills`);
  }
 
