const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllImage, queryPostImage, queryUpdateImage, queryRemoveImage } = require('../models/imageModel');


// The function to collect all of the users
exports.getAllImage = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the users
    queryAllImage(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postImage = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryPostImage(connect, req, res);

    //Close the connection
    connect.end();

}

exports.putImage = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryUpdateImage(connect, req, res);

    //Close the connection
    connect.end();

}

exports.removeImage = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryRemoveImage(connect, req, res);

    //Close the connection
    connect.end();

}