require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db")
const authRoutes = require("./routes/authRoutes")
const incomRoutes = require("./routes/incomRoutes")
const expenseRoutes = require("./routes/expenseRoutes")
const dashboardRoutes = require("./routes/dashboardRoutes")
const app = express();

// middleware to handle cors
app.use(cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
     credentials: true // Allow credentials if needed
}));

app.use(express.json());

connectDB()

app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/income",incomRoutes)
app.use("/api/v1/expense",expenseRoutes)
app.use("/api/v1/dashboard",dashboardRoutes)

// Serve upload folder
app.use("/uploads",express.static(path.join(__dirname,"uploads")));
app.use("/upload", express.static("upload"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})