import {create} from 'zustand'
import { axiosInstance } from '@/lib/axios'

interface Project{
  pName:string,
  _id:string
}

interface Projects{
  createdAt:Date,
  memberId:string,
  projectId:Project,
  role:string,
  _id:string
}
interface FormData{
    name:string,
    description:string,
    createdBy:string
}

interface projectState{
    isloading:boolean,
    projects:Projects[],
    currentProject:string |null,
    createProject:(formData:FormData)=>Promise<void>,
    getProject:(id:string|undefined)=>void
}

export const useProjectState=create<projectState>((set)=>({
    projects:[],
    currentProject:null,
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
    getProject:async(id:string|undefined)=>{

        try {
            
       const res= await axiosInstance.get(`/userProjects/${id}`);
        set({projects:res.data,
            currentProject:res.data[0]
        })
        
        } catch (error) {
            console.log(error)
        }
        
    }
}))