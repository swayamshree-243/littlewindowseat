const express = require("express");
const router = express.Router();

const recommend = require("../controllers/recommend.controller");
const upload = require("../middleware/upload.middleware");

router.post("/recommend", upload.single("image"), recommend);

module.exports = router;