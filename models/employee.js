var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employee = new Schema({

name:{
 type:String,
 required:false
},
email:{
 type:String,
 required:false
},
address:{
    type:String,
    required:false
},
project:{
    type:String,
    required:false
},
dateofjoining:{
    type:Date,
    required:false
}


});

module.exports = mongoose.model('employee', employee);