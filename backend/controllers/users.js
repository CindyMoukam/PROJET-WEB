const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllUsers, queryPostUser, queryUpdateUser, queryRemoveUser } = require('../models/usersModel');


// The function to collect all of the users
exports.getAllUsers = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the users
    queryAllUsers(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postUser = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryPostUser(connect, req, res);

    //Close the connection
    connect.end();

}

exports.putUser = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryUpdateUser(connect, req, res);

    //Close the connection
    connect.end();

}

exports.removeUser = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryRemoveUser(connect, req, res);

    //Close the connection
    connect.end();

}