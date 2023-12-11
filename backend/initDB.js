const mongoose = require('mongoose');

module.exports = () => {
    //  mongodb://127.0.0.1:27017/cspReports
    //  mongodb://mongodb:27017/cspReports
    mongoose.connect('mongodb://mongodb:27017/cspReports').then(() => {
        console.log('Mongodb connected');
    })
        .catch(err => console.log(error.message));

    mongoose.connection.on('connected', () => {
        console.log("Mongoose connected to db...");
    });

    mongoose.connection.on('error', err => {
        console.log(err.message);
    });

    mongoose.connection.on('disconnected', () => {
        console.log("Mongoose connection is disconnected");
    });
};