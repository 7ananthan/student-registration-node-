var mongoose=require('mongoose');

const courseSchema =new mongoose.Schema(
    {
        studentId:String,
        courseName:String,
        courseFee :String,
        instructorName:String,
        duration:String
    }
);
const coursemodel =new mongoose.model('courses_details',courseSchema );
module.exports={coursemodel}