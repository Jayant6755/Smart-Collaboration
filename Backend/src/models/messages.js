import mongoose from "mongoose";

const msg=new mongoose.Schema({
   senderId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"User"
  },
  projectId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Project"
  },
  message:{
    type:String
  },
  messageType:{
    type:String,
    enum:["text","image","audio","file"]
  },
  threadId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Message",
    default:null
  },
  attachments:[
    {
      url:String,
      type:String
    }
  ],
  readBy:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"
    }
  ]
},{timestamps:true})

export const Msg=mongoose.model("Message",msg)