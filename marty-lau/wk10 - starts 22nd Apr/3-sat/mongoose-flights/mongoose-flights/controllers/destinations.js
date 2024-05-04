const Flight = require('../models/flight');

module.exports = {
    create,
    new: newDestination
};

async function create(req, res) {
    const flight = await Flight.findById(req.params.id);
    // We can push (or unshift) subdocs into Mongoose arrays
    flight.destinations.push(req.body);
    console.log(flight.id);
    try {
        // Save any changes made to the flight doc
        await flight.save();
        res.redirect(`/flights/${flight.id}`);
    } catch (err) {
        
        console.log(err);
    }
    // Step 5:  Respond to the Request (redirect if data has been changed)
    // res.redirect(`/flights/show/${flight.id}`);
};

async function newDestination(req, res) {
    const flight = await Flight.findById(req.params.id);
    // Get list of airports used as destinations for the flight
    const usedAirports = flight.destinations.map(destination => destination.airport);
    // Filter available airports to exclude those already used
    const availableAirports = ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'].filter(airport => !usedAirports.includes(airport));
    res.render("flights/newDestination", { flight, availableAirports });
};
