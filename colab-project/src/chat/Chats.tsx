import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Send, Plus, Search, User } from 'lucide-react'
import React from 'react'

function Chats() {
  const groups = [
    { id: "1", name: "Dev Team", img: "" },
    { id: "2", name: "Design", img: "" },
    { id: "3", name: "Marketing", img: "" },
    { id: "4", name: "General", img: "" },
    { id: "5", name: "Updates", img: "" },
    { id: "6", name: "AI Sync", img: "" }
  ]

  const chats = [
    { id: "user", msg: "Hey team, how is the SyncSphere dashboard looking?", time: "10:00 AM" },
    { id: "receiver", msg: "Just finished the responsive layout! It's looking sharp.", name: "Alex", time: "10:02 AM" },
    { id: "receiver2", msg: "I'm working on the AI chat assistant icons right now.", name: "Jordan", time: "10:05 AM" },
    { id: "user", msg: "Great work everyone! Let's aim for a Friday demo.", time: "10:10 AM" },
  ]

  return (
    <div className="flex flex-col h-[calc(100vh-80px)] bg-[#f8faff]">
      {/* Top Section: Group Selector */}
      <div className="bg-white border-b border-blue-50 p-4">
        <div className="flex items-center gap-4 mb-2">
           <h2 className="text-sm font-bold uppercase tracking-wider text-slate-400">Channels</h2>
           <button className="p-1 hover:bg-blue-50 rounded text-blue-600 transition-colors">
              <Plus size={16} />
           </button>
        </div>
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-4 p-1">
            {groups.map((g, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group cursor-pointer">
                <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                  {g.img ? <img src={g.img} className="rounded-2xl" alt={g.name} /> : <span className="font-bold">{g.name[0]}</span>}
                </div>
                <p className="text-xs font-semibold text-slate-600 group-hover:text-blue-600">{g.name}</p>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <ScrollArea className="flex-1 p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          {chats.map((c, i) => {
            const isUser = c.id === "user";
            return (
              <div key={i} className={`flex items-end gap-3 ${isUser ? 'flex-row-reverse' : 'flex-row'}`}>
                {/* Avatar */}
                <div className="h-8 w-8 rounded-full bg-slate-200 flex-shrink-0 flex items-center justify-center overflow-hidden border border-white shadow-sm">
                  <User size={16} className="text-slate-500" />
                </div>

                {/* Bubble Container */}
                <div className={`flex flex-col max-w-[70%] ${isUser ? 'items-end' : 'items-start'}`}>
                  {!isUser && <span className="text-[10px] font-bold text-slate-400 ml-2 mb-1 uppercase tracking-tight">{c.name}</span>}
                  
                  <div className={`p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                    isUser 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white text-slate-700 border border-blue-50 rounded-bl-none'
                  }`}>
                    {c.msg}
                  </div>
                  
                  <span className="text-[10px] text-slate-400 mt-1 px-1">{c.time}</span>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>

      {/* Input Bar */}
      <div className="p-4 bg-white border-t border-blue-50">
        <div className="max-w-4xl mx-auto relative flex items-center gap-2">
          <div className="relative flex-1">
             <input 
              type="text" 
              placeholder="Type a message..." 
              className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-50 transition-all text-sm"
             />
             <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-100">
               <Send size={16} />
             </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chats