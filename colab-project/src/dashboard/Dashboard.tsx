import { File, ThermometerSnowflake, User, Sparkles, Activity, LayoutDashboard } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"


function Main() {
  const cards = [
    { name: "Active Task", value: 12, logo: <ThermometerSnowflake className="text-blue-600" /> },
    { name: "File Thread", value: 12, logo: <File className="text-blue-600" /> },
    { name: "Team Member", value: 12, logo: <User className="text-blue-600" /> }
  ]

  const activi = [
    { name: "Task 1", value: "Completed", time: "2 mins ago" },
    { name: "Task 2", value: "In Progress", time: "1 hour ago" },
    { name: "Task 3", value: "Pending", time: "3 hours ago" },
    { name: "Task 4", value: "Pending", time: "Yesterday" },
  ]

  return (
    <div className="min-h-screen w-full bg-[#f8faff] p-8 font-sans text-slate-900">
      {/* Header Section */}
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-sm font-bold uppercase tracking-widest text-blue-600">Overview</h1>
          <h2 className="text-3xl font-extrabold tracking-tight">
            Project <span className="text-transparent bg-clip-text bg-linear-to-br from-blue-600 to-indigo-500">DASHBOARD</span>
          </h2>
        </div>
        <div className="bg-white p-2 rounded-full shadow-sm border border-blue-100">
          <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
            <User size={20} />
          </div>
        </div>
      </header>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6 flex items-center hover:shadow-md transition-all duration-300 group">
            <div className="h-14 w-14 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-400 transition-colors duration-300">
              <span className="group-hover:text-white transition-colors duration-300">{card.logo}</span>
            </div>
            <div className="ml-5">
              <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">{card.name}</p>
              <h3 className="text-2xl font-bold text-slate-800">{card.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Left Column: Activity & Assistant */}
        <div className="lg:basis-3/4 space-y-8">
          
          {/* Recent Activity */}
          <section className="bg-white rounded-3xl shadow-sm border border-blue-50 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex items-center justify-between">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Activity className="text-blue-600" size={22} /> Recent Activity
              </h2>
              <button className="text-sm font-semibold text-blue-600 hover:text-blue-700">View All</button>
            </div>
            <ScrollArea className="h-80 px-6">
              {activi.map((act, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0 hover:bg-blue-50/30 px-2 rounded-xl transition-colors">
                  <div>
                    <h3 className="font-semibold text-slate-800">{act.name}</h3>
                    <p className={`text-xs font-bold uppercase ${act.value === 'Completed' ? 'text-green-500' : (act.value==="Pending"?'text-blue-400':'text-yellow-400')}`}>
                      {act.value}
                    </p>
                  </div>
                  <span className="text-sm text-slate-400">{act.time}</span>
                </div>
              ))}
            </ScrollArea>
          </section>

          {/* AI Assistant Chat Area */}
          <section className="bg-linear-to-br from-blue-600 to-indigo-700 rounded-3xl p-6 text-white shadow-lg shadow-blue-200">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles size={20} />
              <h2 className="text-lg font-bold">AI Assistant</h2>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 min-h-37.5 border border-white/20">
              <p className="text-blue-50 italic">"How can I help you optimize your workflow today?"</p>
              {/* Add a mini input style placeholder */}
              <div className="mt-8 bg-white/20 rounded-lg p-3 text-sm text-blue-100 flex justify-between items-center">
                Ask a question...
                <div className="bg-white text-blue-600 p-1 rounded-md">
                   <LayoutDashboard size={14} />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: AI Insights / Sidebar */}
        <div className="lg:basis-1/4">
          <div className="bg-white rounded-3xl border border-blue-50 p-6 sticky top-8 shadow-sm">
             <div className="flex items-center gap-2 mb-6">
                <div className="h-2 w-2 rounded-full bg-blue-600 animate-pulse"></div>
                <h3 className="text-lg font-bold">Smart Insights</h3>
             </div>
             <div className="space-y-6">
                <div className="p-4 bg-orange-50 rounded-2xl border border-orange-100">
                   <p className="text-xs font-bold text-orange-600 uppercase mb-1">Alert</p>
                   <p className="text-sm text-slate-700">3 tasks are reaching their deadline in 2 hours.</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100">
                   <p className="text-xs font-bold text-blue-600 uppercase mb-1">Efficiency</p>
                   <p className="text-sm text-slate-700">Your team completed 15% more tasks this week!</p>
                </div>
             </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Main