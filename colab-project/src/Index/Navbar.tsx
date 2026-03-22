import { Link, useLocation } from "react-router-dom";
import { Bell, LogOut, Settings, LayoutGrid, MessageSquare, ClipboardList } from "lucide-react";
import { useAuthState } from "@/useState/authState";

function Navbar() {
  const location = useLocation();
  const {signOut}=useAuthState()

  const navigations = [
    { name: 'Dashboard', link: '/', icon: <LayoutGrid size={18} /> },
    { name: 'Task', link: '/task', icon: <ClipboardList size={18} /> },
    { name: 'Chat', link: '/chat', icon: <MessageSquare size={18} /> }
  ];
  const signout=()=>{
      signOut();
  }

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-blue-50 px-6 py-3">
      <div className="max-w-400 mx-auto flex items-center justify-between">
        
        {/* Left Side: Logo & Brand */}
        <div className="flex items-center gap-3 basis-1/4">
          <div className="h-10 w-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-200">
            {/* Placeholder for your generated SyncSphere Orb Logo */}
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-xl font-black tracking-tighter text-slate-800">
            Sync<span className="text-blue-600">Sphere</span>
          </span>
        </div>

        {/* Center: Navigation Links */}
        <div className="basis-1/2">
          <ul className="flex justify-center items-center gap-8">
            {navigations.map((nav, index) => {
              const isActive = location.pathname === nav.link;
              return (
                <li key={index}>
                  <Link
                    to={nav.link}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                      isActive 
                        ? "bg-blue-600 text-white shadow-md shadow-blue-200" 
                        : "text-slate-500 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    {nav.icon}
                    {nav.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right Side: Actions & Profile */}
        <div className="basis-1/4 flex items-center justify-end gap-4">
          {/* Notifications */}
          <button className="relative p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
            <Bell size={20} />
            <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-white"></span>
          </button>

          {/* Settings */}
          <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-colors">
            <Settings size={20} />
          </button>

          <div className="h-8 w-[1px] bg-slate-100 mx-2"></div>

          {/* Logout Button */}
          <button className="flex items-center gap-2 pl-3 pr-4 py-2 text-sm font-bold text-red-500 hover:bg-red-50 rounded-xl transition-all"
          onClick={signout}>
            <LogOut size={18} />
            <span>Logout</span>
          </button>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;