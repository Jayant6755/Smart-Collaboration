import { 
  MoreHorizontal, Plus, CheckCircle2, Clock, Eye, ListTodo, 
  
} from "lucide-react";
import { AddTask } from "./AddTask";



function Task() {
  // Static Project Groups (Shared with Main Dashboard)
 
  const boardData = [
    {
      title: "To Do",
      icon: <ListTodo size={18} className="text-slate-400" />,
      color: "bg-slate-50/50",
      tasks: [
        { id: 1, task: "Integrate SyncSphere API", members: ["u1", "u2"], priority: "High" },
        { id: 2, task: "Design System Update", members: ["u3"], priority: "Medium" }
      ]
    },
    {
      title: "In Progress",
      icon: <Clock size={18} className="text-blue-500" />,
      color: "bg-blue-50/30",
      tasks: [
        { id: 3, task: "Database Schema Refactor", members: ["u2", "u4"], priority: "High" }
      ]
    },
    {
      title: "Review",
      icon: <Eye size={18} className="text-purple-500" />,
      color: "bg-purple-50/30",
      tasks: [
        { id: 5, task: "Dashboard UI Polish", members: ["u3", "u1"], priority: "Low" }
      ]
    },
    {
      title: "Completed",
      icon: <CheckCircle2 size={18} className="text-green-500" />,
      color: "bg-green-50/30",
      tasks: [
        { id: 6, task: "Initial Project Setup", members: ["u1", "u2"], priority: "Medium" }
      ]
    }
  ];

  const handleSave = () => console.log("Data saved!");

  return (
    <div className="min-h-screen bg-[#f8faff] p-4 md:p-8 font-sans">
      
    

      
      <div className="flex flex-row gap-6 overflow-x-auto pb-6">
        {boardData.map((column, idx) => (
          <div key={idx} className="basis-1/4 min-w-[320px] flex flex-col gap-4">
          
            <div className="flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                {column.icon}
                <h3 className="font-bold text-slate-700">{column.title}</h3>
                <span className="bg-white border border-slate-200 text-slate-400 text-[10px] font-black px-2 py-0.5 rounded-full">
                  {column.tasks.length}
                </span>
              </div>
              <MoreHorizontal size={18} className="text-slate-300 cursor-pointer" />
            </div>

            {/* Task List Container */}
            <div className={`flex-1 rounded-[2rem] p-4 border border-slate-100 ${column.color} min-h-[600px] space-y-4`}>
              {column.tasks.map((t) => (
                <div key={t.id} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all group cursor-grab">
                  <div className="flex justify-between items-start mb-4">
                    <span className={`text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg ${
                      t.priority === 'High' || t.priority === 'Critical' ? 'bg-red-50 text-red-500' : 'bg-blue-50 text-blue-500'
                    }`}>
                      {t.priority}
                    </span>
                    <MoreHorizontal size={14} className="text-slate-200 group-hover:text-slate-400" />
                  </div>
                  
                  <h5 className="text-sm font-bold text-slate-800 mb-6 leading-relaxed">
                    {t.task}
                  </h5>

                  <div className="flex justify-between items-center">
                    <div className="flex -space-x-2">
                      {t.members.map((m, i) => (
                        <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center font-bold text-[10px] text-slate-600">
                           {m.toUpperCase()}
                        </div>
                      ))}
                    </div>
                    <button className="h-8 w-8 rounded-full bg-slate-50 text-slate-300 flex items-center justify-center hover:bg-blue-50 hover:text-blue-500 transition-colors">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
              ))}
              
              {/* Clean Add Task Trigger at bottom of list */}
              <AddTask 
                status={column.title}
                title={`Add to ${column.title}`}
                onSave={handleSave}
                trigger={
                  <button type="button" className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl text-slate-400 text-xs font-black uppercase tracking-widest hover:border-blue-200 hover:text-blue-500 hover:bg-white transition-all">
                    + Add Task
                  </button>
                }
              >
                 <div className="space-y-4">
                  <input className="w-full p-2 border rounded-md" placeholder="Task Name" />
                </div>
              </AddTask>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Task;