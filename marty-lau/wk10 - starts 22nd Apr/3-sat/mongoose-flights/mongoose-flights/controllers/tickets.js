var Ticket = require("../models/ticket");
var Flight = require("../models/flight");

module.exports = {
    createTicket,
};

async function createTicket(req, res) {
    try {
        const flightId = req.params.id;
        const { seat, price } = req.body;

        const ticket = new Ticket({
            seat,
            price,
            flight: flightId
        });

        await ticket.save();

        res.redirect(`/flights/${flightId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};