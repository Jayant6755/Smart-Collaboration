import {create} from 'zustand'
import { axiosInstance } from '@/lib/axios'

interface Projects{
    id:string,
    name:string,
    
}
interface FormData{
    name:string,
    description:string,
    createdBy:string
}

interface projectState{
    isloading:boolean,
    projects:Projects[],
    createProject:(formData:FormData)=>Promise<void>,
    getProject:()=>void
}

export const useProjectState=create<projectState>((set)=>({
    projects:[],
    isloading:false,

    createProject:async(formData)=>{
        set({isloading:true})
        try {
              await axiosInstance.post("/create",{
            pName:formData.name,
            description:formData.description,
            createdBy:formData.createdBy
        })
        } catch (error) {
            console.log(error)
        }finally{
            set({isloading:false})
        }
      
    },
    getProject:async()=>{
       const res= await axiosInstance.get("/projects");
        set({projects:res.data})
    }
}))