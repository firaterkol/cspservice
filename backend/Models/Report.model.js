const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CspSchema = new Schema({
    "document-uri":{
        type: String,
        required: false
    },

    referrer: {
        type: String,
        required: false
    },

    "blocked-uri": {
        type: String,
        required: false
    },

    "violated-directive": {
        type: String,
        required: false
    },

    "original-policy": {
        type: String,
        required: false
    },

    "source-file": {
        type: String,
        required: false
    },

    "line-number": {
        type: Number,
        required: false
    },

    "column-number": {
        type: Number,
        required: false
    },

    "effective-directive": {
        type: String,
        required: false
    },
    
    "status-code": {
        type: Number,
        required: false
    },

    "status-message": {
        type: String,
        required: false
    },

    "script-sample": {
        type: String,
        required: false
    },

    disposition: {
        type: String,
        required: false
    },

    "referrer-policy": {
        type: String,
        required: false
    }
});

const ReportSchema = new Schema({
    domain: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        required: true
    },
    
    'csp-report': {
        type: CspSchema,
        required: true
    }
});



const Report = mongoose.model('report', ReportSchema);
module.exports = Report;