import mongoose from 'mongoose'

const BlackListSchema=new mongoose.Schema({
    token: { type: String, required: true },
  createdAt: { 
    type: Date, 
    default: Date.now, 
    expires: '24h' 
  }
})

const BlackListModel=mongoose.model('BlackListMode',BlackListSchema)

export default BlackListModel