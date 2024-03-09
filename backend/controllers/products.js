const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllProducts, queryPostProduct, queryUpdateProduct, queryRemoveProduct } = require('../models/productModel');


// The function to collect all of the users
exports.getAllProducts = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the users
    queryAllProducts(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postProduct = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryPostProduct(connect, req, res);

    //Close the connection
    connect.end();

}

exports.putProduct = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryUpdateProduct(connect, req, res);

    //Close the connection
    connect.end();

}

exports.removeProduct = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryRemoveProduct(connect, req, res);

    //Close the connection
    connect.end();

}