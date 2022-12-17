const Flight = require("../models/Flight")

module.exports = {
    index,
    new: newFlight,
    create,
}

function index(req, res) {
    Flight.find({}, function(err, flights) {
        res.render("flights/index", { flights: "All flights", flights})
    })
}

function newFlight(req, res) {
    res.render("flights/new", {flight: "Add Flight"})
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