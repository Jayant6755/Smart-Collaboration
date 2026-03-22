import mongoose from "mongoose";

const projects=new mongoose.Schema({
    pName:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})

export const Projects= mongoose.model("Projects",projects)