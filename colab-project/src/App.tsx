
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Index from "./Index/Index";
import Dashboard from "./dashboard/Dashboard";
import Navbar from "./Index/Navbar";
import Task from "./task/Task";
import Chats from "./chat/Chats";
import Auth from "./autharization/Auth";
import { useAuthState } from "./useState/authState";



const queryClient = new QueryClient();

const App = () => {
  
   const checkAuth = useAuthState((state) => state.checkAuth);
   const {isAuthenticated}=useAuthState()
  useEffect(() => {
    
  checkAuth()
    console.log(isAuthenticated)
  }, [])
  

  if(!isAuthenticated) return (
    
    <div>
    
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/auth" element={<Auth/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
    console.log(isAuthenticated)
  return (

  

  <QueryClientProvider client={queryClient}>
    
    <TooltipProvider>
    
      <Sonner />
      <BrowserRouter>
       
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/task" element={<Task/>}/>
            <Route path="/chat" element={<Chats/>}/>
          </Routes>
       
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  );
};

export default App;
