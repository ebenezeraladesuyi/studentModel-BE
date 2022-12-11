import mongoose from "mongoose";

type students = {
    name : string,
    admissionNo : number,
    session : number,
    Class : number
}

interface iStudents extends students, mongoose.Document {}

const studentSchema =  new mongoose.Schema({
    name : String,
    admissionNo : Number,
    session : Number,
    Class : Number,
    },
    {timestamps: true}
);

export default mongoose.model<iStudents>("myStudent", studentSchema);

