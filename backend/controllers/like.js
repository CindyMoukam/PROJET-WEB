const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryPostlike, queryUpdatelike, queryRemovelike } = require('../models/likeModel');

// The function to collect all of the like
exports.getAlllike = async (req, res) => {
    
    // The connection  at the database
    const connect =  dbConnect();

    // The request to collect all of the like
    queryAlllike(connect, req, res);

    //Close the connection
    connect.end();
}



exports.postlike = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the like
    queryPostlike(connect, req, res);

    //Close the connection
    connect.end();

}
exports.putlike= async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the like
    queryUpdatelike (connect, req, res);

    //Close the connection
    connect.end();

}

exports.removelike = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the like
    queryRemovelike(connect, req, res);

    //Close the connection
    connect.end();

}