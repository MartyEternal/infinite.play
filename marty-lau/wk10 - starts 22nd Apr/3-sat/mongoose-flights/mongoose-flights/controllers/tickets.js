var Ticket = require("../models/ticket");


module.exports = {
    create,
    new: newTicket,
};

async function create(req, res) {
    try {
        const flightId = req.params.id;
        const { seat, price } = req.body;

        const ticket = new Ticket({
            seat,
            price,
            flight: flightId
        });

        await ticket.save();
        console.log("Ticket saved:", ticket);

        res.redirect(`/flights/${flightId}`);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
};

async function newTicket(req, res) {
    const flightId = req.params.id;
    res.render("tickets/new", { flightId });
}