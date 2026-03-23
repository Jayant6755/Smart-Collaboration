import { create } from 'zustand';
import { axiosInstance } from '@/lib/axios';

interface User {
  id:string;
  fullName: string;
  email: string;
  avatar?: string;
}
interface formData{
  fullName:string,
  email:string,
  password:string

}

interface loginData{
  email:string,
  password:string
}

interface AuthState {
  
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signUp: (formData:formData) => Promise<void>;
  signIn: (formData:loginData) => Promise<void>;
  signOut: () => void;
  checkAuth:()=>void;
}

export const useAuthState = create<AuthState>((set) => ({
  user: null,

  isAuthenticated: false,
  isLoading: false,
  
  signUp: async (formData:formData) => {
    set({ isLoading: true });
    try {
      
    const res=  await axiosInstance.post('/signup', {
        fullName:formData.fullName,
        email:formData.email,
        password:formData.password,
      });
     
      set({ 
        
        user:{
          id:res.data.id,
          fullName:res.data.fullName,
          email:res.data.email
        }, 
        isAuthenticated: true, 
        isLoading: false 
      });
     
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  
  signIn: async (formData:loginData) => {
    set({ isLoading: true });
    try {
      const res=await axiosInstance.post('/login', {
        email:formData.email,
        password:formData.password
      });
      set({
        
        user:{
          id:res.data.id,
          fullName:res.data.fullName,
          email:res.data.email
        },
        isLoading: false ,
        isAuthenticated:true
      });
      
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },
  
  signOut: async() => {
    try{
        await axiosInstance.get("/logout");
    set({ user: null, isAuthenticated: false });
    }catch(error){
        console.error(error)
    }
   
  },


  checkAuth: async () => {
  try {
   
    const res = await axiosInstance.get("/check");
    console.log(res.data.user)
    set({  user:{
          id:res.data.id,
          fullName:res.data.fullName,
          email:res.data.email
        },
      isAuthenticated: res.data.user
    });

  } catch (error) {
    set({
      user: null,
      isAuthenticated: false
    });
  }
}
}));
