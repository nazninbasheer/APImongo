var mongoose= require('mongoose');
var detailSchema = mongoose.Schema({
    name:String,
    age:String,
    address:String
});
var detail=mongoose.model('details',detailSchema);
module.exports=detail;