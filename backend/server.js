const cors = require("cors");
require("dotenv").config();
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());
// routes
const healthRoutes = require("./routes/health.routes");
const recommendRoutes = require("./routes/recommend.routes");

app.use(healthRoutes);
app.use(recommendRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});