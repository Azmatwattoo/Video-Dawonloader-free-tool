const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "AzDar Downloader API is running",
        version: "V2"
    });
});

app.post("/api/analyze", (req, res) => {

    const { url } = req.body;

    if (!url) {
        return res.status(400).json({
            success: false,
            message: "URL is required"
        });
    }

    try {
        new URL(url);
    } catch (error) {
        return res.status(400).json({
            success: false,
            message: "Invalid URL"
        });
    }

    res.json({
        success: true,
        message: "URL received successfully",
        url: url,
        status: "ready"
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`AzDar API running on port ${PORT}`);
});
