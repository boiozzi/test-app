const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 8080;
const HOST = "0.0.0.0";
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database Connection
const connection = mysql.createConnection({
    host: "localhost", // Change if using a different host
    user: "root",      // MySQL username
    password: "admin", // Replace with your actual password
});

connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err.stack);
        return;
    }
    console.log("Connected to MySQL database!");
});

// Create database
connection.query(`CREATE DATABASE IF NOT EXISTS prescreeningApp`, (error, result) => {
    if (error) {
        console.error("Error creating database:", error);
    } else {
        console.log("Database created or already exists!");
    }
});

// Use the database
connection.query(`USE prescreeningApp`, (error) => {
    if (error) console.error("Error selecting database:", error);
});

// Create "project_location" table
connection.query(
    `CREATE TABLE IF NOT EXISTS projectLocation (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    locationName VARCHAR(255) NOT NULL,
    latitude DECIMAL(9,6),
    longitude DECIMAL(9,6),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  )`,
    (error) => {
        if (error) console.error("Error creating project_location table:", error);
    }
);

console.log("Database and projectLocation table are set up!");

// Example endpoint to test connection
app.get("/", (req, res) => {
    res.send("Pre-Screening App Backend is Running!");
});

// Start server
app.listen(PORT, HOST, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
