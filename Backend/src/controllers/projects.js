
import { verifyToken } from "../middleware/authenticate.js";
import { Projects } from "../models/projects.js";


export const createProject=async(req,reply)=>{

    try {
            const user=verifyToken(req.cookies.token)

            if(!user) return reply.status(400).send({message:"Unauthorised user"});

            const {pName,description,createdBy}=req.body;
            
        const Project=new Projects({
            pName,
            description,
            createdBy
        })
       Project.save();

        return reply.status(200).send({message:'project created successfully'})

    } catch (error) {
        
    }
}