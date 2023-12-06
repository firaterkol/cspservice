const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReportSchema = new Schema({
    message: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
});

const Report = mongoose.model('report', ReportSchema);
module.exports = Report;