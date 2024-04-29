const Flight = require("../models/flight");

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

async function index(req, res) {
    res.render("flights/index", {
        flights: await Flight.find({}),
    });
};

function newFlight(req, res) {
    res.render("flights/new", { errorMsg: "" });

};

async function create(req, res) {
    try {
        await Flight.create(req.body);
        res.redirect("/flights");
    } catch (err) {
        console.log(err);
        res.render("flights/new", { errorMsg: err.message });
    };
};

async function show(req, res) {
    const flight = await Flight.findById(req.params.id);
    res.render("flights/show", {
        title: "Flight Details", flight
    });
};