const Flight = require('../models/flight')

module.exports = {
    all,
    new: newFlight,
    addFlight,
    show
}

async function all(request, response) {
    const flights = await Flight.find({})
    response.render("./flights/index", {flights: flights})
}

function newFlight(request, response) {
    response.render('./flights/new')
}

async function addFlight(request, response) {
    // should I add an object to pass data in ejs view?
    if(request.body.flightNo.length < 2) {
        response.render('flights/new')
    }
    request.body.destinations = !!request.body.destinations
    // for(let key in req.body) {
    //     if(request.body[key] === "") delete request.body[key]
    // }
    try {
        // to avoid crashing, we put .create if there is an error, catch block
        // will pick up the error and handles it, instead of crashing. 
        await Flight.create(request.body)
        response.redirect('flights')
    } catch(err) {
        console.log(err)
        response.render('flights/new', { errorMsg: err.message})
    }
}

async function show(request, response) {
    const flight = await Flight.findById(request.params.id)
    response.render('./flights/show', {title: "Flight details", flight})
}