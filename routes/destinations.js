var express = require("express")
var router = express.Router()
const destinationsCTRL = require("../controllers/destinations")


router.post("/flights/:id/destinations", destinationsCTRL.create)

module.exports = router