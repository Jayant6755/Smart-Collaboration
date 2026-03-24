import { verifyToken } from "../middleware/authenticate.js"
import { Task } from "../models/task.js";
export const addTask=async(req,reply)=>{

    try {
        const token=verifyToken(req.cookies.token)
        if(!token) return reply.status(401).send({message:"user is not authorised"});

        const {title, 
      description, 
      projectId, 
      assignedTo, 
      status, 
      priority, 
      dueDate}=req.body;

      const newTask=new Task({
        title, 
      description, 
      projectId, 
      assignedTo, 
      status, 
      priority, 
      dueDate
      })
      newTask.save();

      return reply.status(200).send({message:"task created"});



    } catch (error) {
        console.log(error)
        return reply.status(400).send({message:"task cannot be created"});
    }
}