const express = require('express');

const createError = require('http-errors');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

require('./initDB')();

const ReportRoute = require('./Routes/Report.route');
app.use('/report', ReportRoute);

app.use((req, res, next) => {
    next(createError(404, 'Not Found'));
});

//Error handler
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.send({
        error: {
            status: err.status || 500,
            message: err.message
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000...');
});