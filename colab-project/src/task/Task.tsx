import { MoreHorizontal, Plus, User, CheckCircle2, Clock, Eye, ListTodo } from "lucide-react";
import { AddTask } from "./AddTask";
import { Button } from "@/components/ui/button";


function Task() {
  // Organized data for easier mapping
  const boardData = [
    {
      title: "To Do",
      icon: <ListTodo size={18} className="text-slate-400" />,
      color: "bg-slate-100",
      tasks: [
        { id: 1, task: "Integrate SyncSphere API", members: ["user1", "user2"], priority: "High" },
        { id: 2, task: "Design System Update", members: ["user3"], priority: "Medium" }
      ]
    },
    {
      title: "In Progress",
      icon: <Clock size={18} className="text-blue-500" />,
      color: "bg-blue-50",
      tasks: [
        { id: 3, task: "Database Schema Refactor", members: ["user2", "user4"], priority: "High" },
        { id: 4, task: "Auth Middleware Debug", members: ["user1"], priority: "Critical" }
      ]
    },
    {
      title: "Review",
      icon: <Eye size={18} className="text-purple-500" />,
      color: "bg-purple-50",
      tasks: [
        { id: 5, task: "Dashboard UI Polish", members: ["user3", "user1"], priority: "Low" }
      ]
    },
    {
      title: "Completed",
      icon: <CheckCircle2 size={18} className="text-green-500" />,
      color: "bg-green-50",
      tasks: [
        { id: 6, task: "Initial Project Setup", members: ["user1", "user2", "user3"], priority: "Medium" },
        { id: 7, task: "Logo Assets Generation", members: ["user4"], priority: "Low" }
      ]
    }
  ];
     
    const handleSave = () => {
    console.log("Data saved to SyncSphere!");
    // Your logic here
  };
  

  return (
    <div className="min-h-screen bg-[#f8faff] p-8">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-800">Project Board</h1>
          <p className="text-slate-500 text-sm">Manage and track your team tasks</p>
        </div>
        
        <AddTask 
        status="To-Do"
        title="Create New Task"
        onSave={handleSave}
        trigger={
            <Button className="bg-blue-600 gap-2 cursor-pointer">
            <Plus size={18} /> New Task
          </Button>
        }
      >
        {/* You can inject any form inputs here */}
        <div className="space-y-4">
          <input className="w-full p-2 border rounded-md" placeholder="Task Name" />
          <textarea className="w-full p-2 border rounded-md" placeholder="Description" />
        </div>
      </AddTask>
      </div>

      {/* Kanban Board */}
      <div className="flex flex-row gap-6 overflow-x-auto pb-4 scrollbar-blue-400">
        {boardData.map((column, idx) => (
          <div key={idx} className="basis-1/4 min-w-[300px] flex flex-col gap-4">
            {/* Column Header */}
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                {column.icon}
                <h3 className="font-bold text-slate-700">{column.title}</h3>
                <span className="bg-white border border-slate-200 text-slate-500 text-xs px-2 py-0.5 rounded-full">
                  {column.tasks.length}
                </span>
              </div>
              <MoreHorizontal size={18} className="text-slate-400 cursor-pointer" />
            </div>

            {/* Task List */}
            <div className={`flex-1 rounded-2xl p-3 ${column.color} min-h-[500px] space-y-3`}>
              {column.tasks.map((t) => (
                <div key={t.id} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-all group cursor-grab">
                  <div className="flex justify-between items-start mb-3">
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${
                      t.priority === 'High' || t.priority === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-blue-50 text-blue-600'
                    }`}>
                      {t.priority}
                    </span>
                    <MoreHorizontal size={14} className="text-slate-300 group-hover:text-slate-500" />
                  </div>
                  
                  <h5 className="text-sm font-semibold text-slate-800 mb-4 leading-relaxed">
                    {t.task}
                  </h5>

                  <div className="flex justify-between items-center">
                    {/* Avatar Stack */}
                    <div className="flex -space-x-2">
                      {t.members.map((m, i) => (
                        <div key={i} className="h-7 w-7 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center overflow-hidden">
                           <User size={14} className="text-blue-600" />
                        </div>
                      ))}
                      {t.members.length === 0 && <span className="text-xs text-slate-400 italic">Unassigned</span>}
                    </div>
                    
                    <button className="text-slate-300 hover:text-blue-600">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
              
              <button className="w-full py-2 border-2 border-dashed border-slate-200 rounded-xl text-slate-400 text-sm font-medium hover:border-blue-300 hover:text-blue-500 transition-colors">
                 <AddTask 
                   status={column.title}
                  title="Create New Task"
                  onSave={handleSave}
                    trigger={
                     <Button className="bg-blue-600 gap-2 cursor-pointer">
                     <Plus size={18} /> Add Task
                     </Button>
        }
      >
        {/* You can inject any form inputs here */}
        <div className="space-y-4">
          <input className="w-full p-2 border rounded-md" placeholder="Task Name" />
          <textarea className="w-full p-2 border rounded-md" placeholder="Description" />
        </div>
      </AddTask>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;