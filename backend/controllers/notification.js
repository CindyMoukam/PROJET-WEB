const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllNotification, queryOneNotification, queryPostNotification, queryUpdateNotification, queryRemoveNotification } = require('../models/notificationModel');


// The function to collect all of the users
exports.getAllNotification = async (req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the users
    queryAllNotification(connect, req, res);

    //Close the connection
    connect.end();
}

// The function to collect one product
exports.getOneNotification = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();

    // The request to collect all of the users
    queryOneNotification(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postNotification = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryPostNotification(connect, req, res);

    //Close the connection
    connect.end();

}

exports.putNotification = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryUpdateNotification(connect, req, res);

    //Close the connection
    connect.end();

}

exports.removeNotification = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the users
    queryRemoveNotification(connect, req, res);

    //Close the connection
    connect.end();

}