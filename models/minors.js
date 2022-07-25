const mongoose = require("mongoose"); 

// tea schema
const MinorSchema = new mongoose.Schema({
    name: {type:String, required:true},
    type: String,
    reqs: []
});

const Minor = mongoose.model('Minor', MinorSchema); //convert to model named Tea
module.exports = Minor; //export for controller use