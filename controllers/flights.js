const Flight = require("../models/Flight")
const Ticket = require("../models/tickets")
module.exports = {
    index,
    new: newFlight,
    create,
    show
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render("flights/index", { flights: "All flights", flights})
    })
}

function newFlight(req, res) {
    res.render("flights/new", {title: "Add Flight"})
}

function create(req, res) {
    const flight = new Flight(req.body)
    console.log(req.body)
    flight.save(function(err) {
        console.log(err)
        if (err) return res.redirect("/flights/new")
        res.redirect("/flights")
    })
}
function show(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        Ticket.find({flight: flight._id}, function(err, tickets) {
            console.log(tickets)
        // Now you can pass both the flight and tickets in the res.render call
        res.render("flights/show", {title: "flight details", flight, tickets}) 
        //ticket showing doesnt seem to be working
        });
    });
}



