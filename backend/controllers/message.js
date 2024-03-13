const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllmessage, queryPostmessage, queryUpdatemessage, queryRemovemessage } = require('../models/messageModel');


// The function  to collect all of the message
exports.getAllmessage = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the message
    queryAllmessage(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postmessage = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the message
    queryPostmessage(connect, req, res);

    //Close the connection
    connect.end();

}
exports.putmessage = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect  all of the message
    queryUpdatemessage (connect, req, res);

    //Close the connection
    connect.end();

}

exports.removemessage = async ( req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the message
    queryRemovemessage(connect, req, res);

    //Close the connection
    connect.end();

}