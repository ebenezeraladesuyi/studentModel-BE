import mongoose from "mongoose";

const URI:string = "mongodb://localhost/student"

mongoose.connect(URI)
mongoose.connection
    .on("open", ()  => {
    console.log ("database connected")
    })
    .once("error", (error) => {
    console.log(`server failed ${error}`);
    })