const Flight = require('../models/flight')

module.exports = {
    all,
    new: newFlight,
}

async function all(request, response) {
    const flights = await Flight.find({})
    response.render("./flights/index", {flights: flights})
}

function newFlight(request, response) {
    // should I add an object to pass data in ejs view?
    response.render('./flights/new')
}