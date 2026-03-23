import { users } from "../models/user.js";
import bcrypt from "bcrypt"
import {authenticate,verifyToken}from "../middleware/authenticate.js";
import BlackListMode from "../models/blacklist.js";
const isproduction=process.env.SYSTEM === 'Production'

export const signUp=async(req,reply)=>{
  const {fullName,email,password}=req.body;
  try {
    
    const user=await users.findOne({email:email});

    if(user){
      return reply.status(409).send({fullName});
    }

    const salt = await bcrypt.genSalt(10);
    const pass=await bcrypt.hash(password,salt)
    const User=new users({
      fullName,
      email,
      password:pass
    })

    await User.save();
    const token=authenticate(User._id);
    const id=User._id
    return reply.setCookie('token',token,{
      path:'/',httpOnly:true,
      secure:isproduction ,
      sameSite:isproduction?'none':'lax',
      maxAge:7*24*60*60*1000
    }).status(200).send({fullName,email,id});
    
  } catch (error) {
   reply.status(400).send({message:error.message});
  }

}

export const login=async(req,reply)=>{
      const {email,password}=req.body
  try{
    console.log("done")
      const user=await users.findOne({email});
      if(!user) return reply.status(400).send({message:"user not found"});
      
      const ismatch=await bcrypt.compare(password,user.password)

      if(!ismatch) return reply.status(401).send({message:"invalid userId or password"});
      
      const token=authenticate(user._id)

      return reply.setCookie('token',token,{
      path:'/',httpOnly:true,
      secure:isproduction ,
      sameSite:isproduction?'none':'lax',
      maxAge:7*24*60*60*1000
    }).status(200).send({fullName:user.fullName,id:user._id})
  }
  catch(error){
    reply.status(400).send({message:"error"})
  }

}

export const logout=async(req,reply)=>{

  try{
      
    const tokenHead=req.cookies.token
      
    if(!tokenHead) return reply.status(401).send({message:"user not verified"});
    console.log("done2")
    const Token=new BlackListMode({token:tokenHead});
   await Token.save()
   reply.clearCookie('token',{path:'/'});
   console.log("done1")
   return reply.status(200).send({message:"User successfully logout"})
 
  }
  catch(error){
    return reply.status(400).send({message:"cannot logout user try again"})
  }
}

export const checkAuth=async(req,res)=>{
     try {
    const token = req.cookies.token;
      
    if (!token) {
      return res.status(401).send({ user: false });
    }

    const decoded = verifyToken(token); 

    const user = await users.findById(decoded.id).select("-password");

    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
      
    res.send({message:'user found',user:true,fullName:user.fullName,id:user._id});

  } catch (error) {
    res.status(401).send({ message: "Invalid token" });
  }
}