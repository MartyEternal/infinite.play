const Flight = require("../models/flight");

module.exports = {
    index,
    show,
    new: newFlight,
    create,
};

async function index(req, res) {
    const query = {};
    const sort = { departs: 1 };
    const cursor = Flight.find(query).sort(sort);
    for await (const doc of cursor) {
        console.dir(doc);
    }
    res.render("flights/index", {
        flights: await Flight.find({}),
    });
};

function newFlight(req, res) {
    const newFlight = new Flight();
    const dt = newFlight.departs;
    const departsDate = `${dt.getFullYear()}-${(dt.getMonth() + 1).toString().padStart(2, '0')}-${dt.getDate().toString().padStart(2, '0')}`;
    res.render('flights/new', { departsDate, errorMsg: '' });
};

async function create(req, res) {
    for (let key in req.body) {
        if (req.body[key] === '') delete req.body[key];
    };
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
    // Sort destinations by arrival date/time in ascending order
    flight.destinations.sort((a, b) => a.arrival - b.arrival);
    res.render("flights/show", { title: "Flight Details", flight });
};
