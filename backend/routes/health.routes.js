const express = require("express");
const router = express.Router();
const check = require("../controllers/health.controller");

router.get('/health', check);

module.exports = router;
