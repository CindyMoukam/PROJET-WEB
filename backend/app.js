// Import the require dependency
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
app = express();

const userRoutes = require('./routes/users');

app.use(express.json());
app.use(cors());

// The route of the API
app.use("/users", userRoutes);


// Export the module to use it the server
module.exports = app;