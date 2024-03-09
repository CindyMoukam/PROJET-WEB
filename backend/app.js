// Import the require dependency
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
app = express();

const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

app.use(express.json());
app.use(cors());

// The route of the API
app.use("/users", userRoutes);
app.use("/product", productRoutes);


// Export the module to use it the server
module.exports = app;