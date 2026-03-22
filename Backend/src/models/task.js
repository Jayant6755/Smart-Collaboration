import mongoose from "mongoose"
const taskSchema = new mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  description:String,
  projectId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Project"
  },
  assignedTo:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  status:{
    type:String,
    enum:["todo","in-progress","completed"],
    default:"todo"
  },
  priority:{
    type:String,
    enum:["low","medium","high"]
  },
  dueDate:Date
},{timestamps:true})

export const Task=mongoose.model("Task",taskSchema)