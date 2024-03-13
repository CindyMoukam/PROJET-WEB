const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllIdea, queryPostIdea, queryUpdateIdea, queryRemoveIdea } = require('../models/ideaModel');


// The function to collect all of the users
exports.getAllIdea = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the users
    queryAllIdea(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postIdea = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryPostIdea(connect, req, res);

    //Close the connection
    connect.end();

}

exports.putIdea = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryUpdateIdea(connect, req, res);

    //Close the connection
    connect.end();

}

exports.removeIdea = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryRemoveIdea(connect, req, res);

    //Close the connection
    connect.end();

}