var mongoose = require("mongoose");

var demoSchema = new mongoose.Schema({
    uid : String,
    title : String,
    content : String,
    createTime : {
        type : Date,
        default:Date.now
    }
});

exports.Demo = mongoose.model('demo',demoSchema,'demo');
