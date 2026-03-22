import mongoose from "mongoose";

const pmembers=new mongoose.Schema({
    projectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Project",
        required:true
    },
    memberId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    role:{
        type:String,
        enum:["admin","member"]
    }
},{timestamps:true})

export const Pmembers=mongoose.model("PMembers",pmembers)