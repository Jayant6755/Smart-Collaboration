import { 
  File, ThermometerSnowflake, User, Sparkles, Activity, 
  LayoutDashboard, Menu, Folder, Hash, Star, Settings, LogOut, Plus 
} from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet"
import NewProject from "./NewProject"
import { useEffect } from "react"
import { useProjectState } from "@/useState/projectState"
import { useAuthState } from "@/useState/authState"



function Main() {
const {getProject,projects}=useProjectState()
const {user}=useAuthState()
  useEffect(()=>{
    console.log(user?.id)
      const funct=async()=>{
        getProject(user?.id)
      }
      funct()
  },[])

  console.log(projects)
  const projectGroups = projects?.length ? (
  projects.map((group, idx) => (
    <div
      key={idx}
      className="group flex items-center justify-between p-3 rounded-xl hover:bg-blue-50 cursor-pointer transition-all"
    >
      <div className="flex items-center gap-3">
        <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
          <Folder size={16} />
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-700 group-hover:text-blue-600">
            {group?.projectId?.pName || "Untitled"}
          </p>
          <p className="text-[10px] text-slate-400">
            {group?.role || "member"}
          </p>
        </div>
      </div>

      {group?.role === "admin" && (
        <span className="text-[10px] px-2 py-0.5 bg-amber-100 text-amber-600 rounded-full font-bold">
          Admin
        </span>
      )}
    </div>
  ))
) : (
  <div className="text-center text-sm text-slate-400 py-6">
    No projects yet 🚀
  </div>
);

  const cards = [
    { name: "Active Tasks", value: 12, logo: <ThermometerSnowflake size={20} /> },
    { name: "File Threads", value: 48, logo: <File size={20} /> },
    { name: "Team Members", value: 8, logo: <User size={20} /> }
  ]

  const activi = [
    { name: "Database Migration", value: "Completed", time: "2 mins ago" },
    { name: "API Integration", value: "In Progress", time: "1 hour ago" },
    { name: "Frontend Cleanup", value: "Pending", time: "3 hours ago" },
    { name: "Bug Squash #402", value: "Pending", time: "Yesterday" },
  ]

  return (
    <div className="min-h-screen w-full bg-[#f8faff] p-4 md:p-8 font-sans text-slate-900">
      
      {/* Header Section */}
      <header className="mb-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger >
              <Button variant="outline" size="icon" className="rounded-xl border-blue-100 bg-white shadow-sm hover:bg-blue-50 transition-colors">
                <Menu className="text-blue-600" size={20} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0 border-r-blue-50 flex flex-col">
              <SheetHeader className="p-6 border-b border-slate-50">
  <SheetTitle className="flex items-center justify-between">
    <div className="flex items-center gap-3 text-blue-600 font-bold text-xl">
      <div className="bg-blue-600 p-1.5 rounded-lg text-white">
        <LayoutDashboard size={18} />
      </div>
      SyncSphere
    </div>

    <Star className="text-amber-400" size={18} />
  </SheetTitle>
</SheetHeader>

              <ScrollArea className="flex-1 px-4 py-6">
                <div className="space-y-8">
                  {   
                  projectGroups
                  }
                </div>
              </ScrollArea>

              {/* Fixed Create Button at Bottom of Sidebar */}
              <div className="p-4 border-t border-slate-50 space-y-4  text-black bg-black">
             <NewProject 
                  triggerText="New Project" 
                />
                <div className="space-y-1">
                  <Button variant="ghost" className="w-full justify-start gap-3 text-slate-500 hover:text-blue-600 h-10 px-3">
                    <Settings size={18} /> <span className="text-sm">Settings</span>
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3 text-red-400 hover:text-red-600 hover:bg-red-50 h-10 px-3">
                    <LogOut size={18} /> <span className="text-sm">Logout</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-1">Workspace Overview</p>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight text-slate-800">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">DASHBOARD</span>
            </h2>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
                <p className="text-sm font-bold text-slate-700">Emily Admin</p>
                <p className="text-xs text-slate-400">Pro Plan</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-100 border border-blue-200 flex items-center justify-center font-bold text-blue-600">
                E
            </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-3xl border border-blue-50 shadow-sm p-6 flex items-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
            <div className="h-14 w-14 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              {card.logo}
            </div>
            <div className="ml-5">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">{card.name}</p>
              <h3 className="text-2xl font-black text-slate-800 tracking-tight">{card.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Activity Feed */}
        <section className="lg:col-span-8 bg-white rounded-[2rem] shadow-sm border border-blue-50 overflow-hidden">
          <div className="p-8 border-b border-slate-50 flex items-center justify-between">
            <h2 className="text-xl font-extrabold flex items-center gap-3">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
                <Activity size={20} />
              </div> 
              Recent Activity
            </h2>
            <Button variant="link" className="text-blue-600 font-bold p-0">View All</Button>
          </div>
          <ScrollArea className="h-[400px] p-2">
            <div className="px-6">
                {activi.map((act, index) => (
                <div key={index} className="flex items-center justify-between py-5 border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors rounded-2xl px-4">
                    <div className="flex items-center gap-4">
                        <div className={`h-2.5 w-2.5 rounded-full ${act.value === 'Completed' ? 'bg-emerald-400' : act.value === 'In Progress' ? 'bg-blue-400' : 'bg-slate-300'}`} />
                        <div>
                            <h3 className="font-bold text-slate-800 text-sm">{act.name}</h3>
                            <p className="text-[10px] font-black uppercase tracking-wider text-slate-400 mt-0.5">
                                {act.value}
                            </p>
                        </div>
                    </div>
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">{act.time}</span>
                </div>
                ))}
            </div>
          </ScrollArea>
        </section>

        {/* Sidebar/Insights */}
        <div className="lg:col-span-4 space-y-6">
            {/* AI Assistant Chat Area */}
            <section className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-[2rem] p-8 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 bg-white/5 h-32 w-32 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
                <div className="flex items-center gap-3 mb-6">
                    <div className="bg-white/10 p-2 rounded-xl backdrop-blur-sm">
                        <Sparkles size={22} className="text-blue-400" />
                    </div>
                    <h2 className="text-lg font-black tracking-tight">AI Assistant</h2>
                </div>
                <div className="space-y-6 relative z-10">
                    <p className="text-blue-100/80 text-sm leading-relaxed font-medium">
                        "I noticed your <span className="text-blue-400 font-bold underline">API Integration</span> task is taking longer than usual. Should I generate a quick refactor plan?"
                    </p>
                    <div className="bg-white/5 border border-white/10 rounded-2xl p-4 text-xs text-blue-200/60 flex justify-between items-center group-hover:bg-white/10 transition-all cursor-pointer">
                        Ask SyncSphere...
                        <div className="bg-blue-500 text-white p-1.5 rounded-lg shadow-lg">
                            <Plus size={14} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-white rounded-[2rem] border border-blue-50 p-8 shadow-sm">
                <div className="flex items-center gap-3 mb-8">
                    <div className="h-2.5 w-2.5 rounded-full bg-blue-600 animate-pulse ring-4 ring-blue-50"></div>
                    <h3 className="text-lg font-bold">Smart Insights</h3>
                </div>
                <div className="space-y-4">
                    <div className="p-5 bg-amber-50/50 rounded-2xl border border-amber-100 group hover:bg-amber-50 transition-all">
                        <p className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Critical Alert</p>
                        <p className="text-sm font-bold text-slate-700 leading-tight">3 tasks reaching deadline in under 2 hours.</p>
                    </div>
                    <div className="p-5 bg-blue-50/50 rounded-2xl border border-blue-100 group hover:bg-blue-50 transition-all">
                        <p className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1">Performance</p>
                        <p className="text-sm font-bold text-slate-700 leading-tight">Task velocity increased by 12.4% today.</p>
                    </div>
                </div>
            </section>
        </div>

      </div>
    </div>
  )
}

export default Main