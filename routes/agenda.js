const express = require("express");
const router = express.Router();

const { getAgenda, getDailyAgenda } = require("../controller/agendaController");

router.route("/").get(getAgenda);
router.route("/:date").get(getDailyAgenda);

module.exports = router;
