const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllUsers, queryPostUser } = require('../models/usersModel');


// The function to collect all of the users
exports.getAllUsers = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryAllUsers(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postUser = async (req, res ) => {

    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the users
    queryPostUser(connect, req, res);

    //Close the connection
    connect.end();

}

exports.DropUsers = async(req, res) =>{
     // The connection at the database
     const connect =  dbConnect();
     
     querydropUsers(connect, req, res);

     connect.end();
     
}