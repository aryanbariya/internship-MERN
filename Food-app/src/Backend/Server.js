const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Enable CORS for frontend access

// API endpoint to get percentage data
app.get("/api/piechart-data", (req, res) => {
    const data = {
        totalOrder: 81,
        customerGrowth: 22,
        totalRevenue: 62
    };
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});