const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllcategory, queryPostcategory, queryUpdatecategory, queryRemovecategory } = require('../models/categoryModel');


// The function  to collect all of the category
exports.getAllcategory = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the category
    queryAllcategory(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postcategory = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the category
    queryPostcategory(connect, req, res);

    //Close the connection
    connect.end();

}
exports.putcategory = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect  all of the category
    queryUpdatecategory (connect, req, res);

    //Close the connection
    connect.end();

}

exports.removecategory = async ( req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the category
    queryRemovecategory(connect, req, res);

    //Close the connection
    connect.end();

}