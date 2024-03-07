// Import the require dependency
const express = require('express');5
const cors = require('cors');
const mysql = require('mysql2');
app = express();

const dataRoutes = require('./routes/data');
const userRouutes = require('./routes/users');


// Manage the cors policy
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// The route of the API
app.use("/data", dataRoutes);
app.use("/users", userRouutes);

app.use(cors());
app.use(express.json());

// Export the module to use it the server
module.exports = app;