const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllUser } = require('../models/usermodel');

const connect = dbConnect();

// The function to collect all of the products of the database 
exports.getProduct = async (req, res) => {

    // The request to collect all of the product
    queryAllUser(connect, req, res);

    // Close the connection with the database
    //connect.end();

};