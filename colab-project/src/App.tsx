
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Index from "./Index/Index";
import Dashboard from "./dashboard/Dashboard";
import Navbar from "./Index/Navbar";
import Task from "./task/Task";
import Chats from "./chat/Chats";


const queryClient = new QueryClient();

const App = () => {
  const [client, setClient] = useState(true);
  
  if(!client) return <Index/>
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
