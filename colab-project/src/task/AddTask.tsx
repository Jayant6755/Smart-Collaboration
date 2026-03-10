import { Button } from "@/components/ui/button"
import { ChevronDown, Flag ,Calendar,  ListTodo} from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface childs{
    trigger: React.ReactNode;
  title: string;
  description?: string;
  children: React.ReactNode; // This will be your form fields
  onSave: () => void;
  status:string
}

export function AddTask({ trigger, title,  children, onSave,status }: childs) {
  const today = new Date().toISOString().split("T")[0];
  
    return (
    <Dialog>
      <form>
        <DialogTrigger>
            {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Edit Task</DialogTitle>
            <DialogDescription>
              Make changes to your Project here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
        <div className="py-4">
          <h2>{title }</h2>
          <p>{children}</p>
        </div>
     

{/* Parent container in your form */}
<div className="flex flex-row gap-4 w-full">
  
  {/* Priority Select Container */}
  <div className="flex-1 basis-1/2 flex flex-col gap-1.5">
    <label 
      htmlFor="priority" 
      className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1"
    >
      Priority Level
    </label>
    
    <div className="relative group">
      {/* Icon Decoration */}
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none group-focus-within:text-blue-600">
        <Flag size={16} />
      </div>

      <select 
        name="priority" 
        id="priority"
        className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none appearance-none hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer"
      >
        <option value="HighPriority">High Priority</option>
        <option value="MediumPriority">Medium Priority</option>
        <option value="LowPriority">Low Priority</option>
      </select>

      {/* Custom Chevron Arrow */}
      <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
        <ChevronDown size={16} />
      </div>
    </div>
  </div>

  {/* Placeholder for the second basis-1/2 element (e.g., Due Date or Category) */}
  <div className="flex-1 basis-1/2 flex flex-col gap-1.5">
    <label  htmlFor="Due-Date" 
      className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1"
      >Due Date</label>
      <div className="relative group">
        {/* Calendar Icon */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none group-focus-within:text-blue-600">
          <Calendar size={16} />
        </div>

        <input 
          type="date"
          id="dueDate"
          name="dueDate"
          // This line disables all dates before today
          min={today} 
          className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer"
        />
      </div>
      <p className="text-[10px] text-slate-400 ml-1">Past dates are disabled</p>
  </div>

</div>
      <div>
        <div>
          <label  htmlFor="Status" 
      className="text-xs font-bold uppercase tracking-wider text-slate-500 ml-1">
            Status
          </label>
          <div>
            <select  
            name="status"
            id="status"
            defaultValue={status}
            className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-medium text-slate-700 outline-none appearance-none hover:border-blue-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-50 transition-all cursor-pointer">
              <option value="To Do">
                📝 To Do</option>
                <option value="In Progress">⚡ In Progress</option>
                  <option value="Review">🔍 Review</option>
                    <option value="Completed">✅ Completed</option>
            </select>
          </div>
        </div>
      </div>
          <DialogFooter>
           <DialogClose >
            <Button variant="outline" className="border-slate-200">Cancel</Button>
          </DialogClose>
          <Button 
            onClick={onSave} 
            className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100"
          >
            Save Changes
          </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}
