const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { dbConnect } = require('../db/db-config');
const { queryAllEvent, queryPostEvent, queryUpdateEvent, queryRemoveEvent } = require('../models/eventModel');


// The function to collect all of the events

// The function to collect all of the events
exports.getAllEvent = async ( req, res) => {
    
    // The connection at the database
    const connect =  dbConnect();

    // The request to  collect all of the event
    queryAllEvent(connect, req, res);

    //Close the connection
    connect.end();
}

exports.postEvent = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the event
    queryPostEvent(connect, req, res);

    //Close the connection
    connect.end();

}
exports.putEvent = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the event
    queryUpdateEvent(connect, req, res);

    //Close the connection
    connect.end();

}

exports.removeEvent = async (req, res) => {

    // The connection at the database
    const connect =  dbConnect();
    
    // The request to collect all of the event
    queryRemoveEvent(connect, req, res);

    //Close the connection
    connect.end();

}