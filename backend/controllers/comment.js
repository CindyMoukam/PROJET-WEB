const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllcomment, queryPostcomment, queryUpdatecomment, queryRemovecomment } = require('../models/categoryModel');


// The function  to collect all of the comment
exports.getAllcomment = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the comment
    queryAllcomment(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postcomment = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the comment
    queryPostcomment(connect, req, res);

    //Close the connection
    connect.end();

}
exports.putcomment = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect  all of the comment
    queryUpdatecomment (connect, req, res);

    //Close the connection
    connect.end();

}

exports.removecomment= async ( req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the comment
    queryRemovecomment(connect, req, res);

    //Close the connection
    connect.end();

}