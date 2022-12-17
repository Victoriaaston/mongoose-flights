var express = require("express")
var router = express.Router()
const flightsCTRL = require("../controllers/flights")

//GET flights index view
router.get("/", flightsCTRL.index)

//GET /flights/new
router.get("/new", flightsCTRL.new)

//POST new flights to /flights
router.post("/", flightsCTRL.create)

module.exports = router