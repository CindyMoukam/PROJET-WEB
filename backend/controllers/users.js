const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllUsers, queryPostUser, queryUpdateUser, queryRemoveUser, queryOneUser, queryLoginUser } = require('../models/usersModel');


// The function to collect all of the users
exports.getAllUsers = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the users
    queryAllUsers(connect, req, res);

    //Close the connection
    connect.end();
}

// The function to collect one product
exports.getOneUsers = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the users
    queryOneUser(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postUser = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryPostUser(connect, req, res)
    .then(() => {
        //Close the connection
        connect.end();
    })
    .catch(err => res.status(500).json({ err }))

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

exports.loginUser = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryLoginUser(connect, req, res);

    //Close the connection
    connect.end();

}