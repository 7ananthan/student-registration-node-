var mongoose =require('mongoose');

const studentSchema = new mongoose.Schema(
    {
        name:String,
        email:String,
        place:String,
        phone:String,
        parentName:String,
        parentPhn:String
    }
);
const studentmodel=mongoose.model('students',studentSchema);
module.exports={studentmodel}