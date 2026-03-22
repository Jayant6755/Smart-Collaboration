import mongoose from "mongoose";

export const mongo_connect=async()=>{

    try {
        const connect=mongoose.connect(process.env.MONGODB_URL)
        console.log("mongoose connected")
    } catch (error) {
        console.log(error)
    }
}