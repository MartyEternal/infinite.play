const Flight = require("../models/flight");

module.exports = {
  new: newFlights,
  create,
  index,
};

function newFlights(req, res) {
  res.render("flights/new", { errorMsg: "" });
}

async function create(req, res) {
  if (req.body.cast) req.body.cast = req.body.cast.split(/\s*,\s*/);

  for (let key in req.body) {
    if (req.body[key] === "") delete req.body[key];
  }
  try {
    await Flight.create(req.body);

    res.redirect("/flights");
  } catch (err) {
    console.log(err);
    res.render("flights/new", { errorMsg: err.message });
  }
}

async function index(req, res) {
  res.render("flights", {
    flights: await Flight.find({}),
  });
}
