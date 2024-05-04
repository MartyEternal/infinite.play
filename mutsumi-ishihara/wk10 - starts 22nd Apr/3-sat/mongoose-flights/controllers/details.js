const Flight = require('../models/flight')

module.exports = {
    add
}

async function add(request, response) {
    if(request.body === '') {
        delete request.body
    }

    const flight = await Flight.findById(request.params.id)
    flight.destinations.push(request.body)
    console.log(flight)
    try{
        flight.save()
    }
    catch(err) {
        console.log(err)
        response.redirect('/flights/:id', {errorMsg: err.message})
    }
}