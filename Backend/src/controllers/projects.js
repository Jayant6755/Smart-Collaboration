
import { verifyToken } from "../middleware/authenticate.js";
import { Pmembers } from "../models/pMembers.js";
import { Projects } from "../models/projects.js";


export const createProject=async(req,reply)=>{

    try {
            const user=verifyToken(req.cookies.token)

            if(!user) return reply.status(400).send({message:"Unauthorised user"});

            const {pName,description,createdBy}=req.body;
            console.log(createdBy)
        const Project=new Projects({
            pName,
            description,
            createdBy
        })
       Project.save();

       const pMember= new Pmembers({
        projectId:Project._id,
        memberId:Project.createdBy,
        role:'admin'
       })

       pMember.save();

        return reply.status(200).send({message:'project created successfully'})

    } catch (error) {
        
    }
}

export const getProject=async(req,reply)=>{

    try {
        const {id}=req.params
        const user=verifyToken(req.cookies.token);
        console.log(id)
        if(!user) return reply.status(401).send({message:"user not authorized"});
        
        const Projects=await Pmembers.find({memberId:id}).populate("projectId","pName");
        
        if(!Projects) return reply.status(200).send({message:"You are in no Groups"});
        
        return reply.status(200).send(Projects);

    } catch (error) {
        console.log(error);
        return reply.status(400).reply({message:"Cannot fetch Groups"});
    }
}