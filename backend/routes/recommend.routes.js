const express = require("express");
const router = express.Router();

const recommend = require("../controllers/recommend.controller");

router.post("/recommend", recommend);

module.exports = router;