const Flight = require("../models/Flight")
const Ticket = require("../models/tickets")

module.exports = {
    new: newTicket,
    create
}

function newTicket(req, res) {
    res.render("tickets/new", {title: "Add Ticket", flightId: req.params.id})
}

function create(req, res) {
    const ticket = new Ticket(req.body)
    ticket.save(function(){
        res.redirect(`/flights/${req.body.flight}`)
    })
}