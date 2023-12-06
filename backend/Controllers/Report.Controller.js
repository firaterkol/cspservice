const Report = require("../Models/Report.model");
const createError = require("http-errors");
const mongoose = require("mongoose");


module.exports = {

    // Find all
    getAllReports: async (req, res, next) =>{
        try{
            const results = await Report.find({}, {__v: 0})
            res.send(results);
        }catch (error){
            console.log(error.message);
        }
    },

    // Find by id
    findReportById: async (req, res, next) => {
        const id = req.params.id;
        try{
            const result = await Report.findOne({_id: id}, {__v: 0});
            if(!result){
                throw createError("404", "Entry does not exist.");
            }
            res.send(result);
        }
        catch (error){
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                next(createError(400, "Invalid id"));
                return;
            }
            next(error);
        }
    },

    // Create new entry
    createNewReport: async (req, res, next) => {

        try{
            const report = new Report(req.body);
            const result = await report.save();
            res.send(result);
        } catch(error){
            console.log(error.message);
            if(error.name === 'ValidationError'){
                next(createError(422, error.message));
                return;
            }
            next(error);
        }
    },

    // Update Entry
    updateReport: async (req, res, next) => {
        try {
            const id = req.params.id;
            const updates = req.body;
            const options = {new: true};

            const result = await Report.findByIdAndUpdate(id, updates, options);
            if(!result){
                throw createError(404, 'Entry does not exist.');
            }
            res.send(result);
        }catch (error) {
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                return next(createError(400, 'Invalid id'));
            }
            next(error);
        }
    },

    // Delete Entry
    deleteReport: async (req, res, next) => {
        const id = req.params.id;
        try {
            const result = await Report.findByIdAndDelete(id);
            console.log(result);
            if(!result){
                throw createError(404, 'Entry does not exist');
            }
            res.send(result);
        } catch (error) {
            console.log(error.message);
            if(error instanceof mongoose.CastError){
                next(createError(400, 'Invalid id.'));
                return;
            }
            next(error);
        }
    }

};