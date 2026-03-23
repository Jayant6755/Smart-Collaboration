import React, { useState } from 'react'
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, FolderPlus, Loader2 } from 'lucide-react'
import { Textarea } from '@/components/ui/textarea'
import { useAuthState } from '@/useState/authState'
import { useProjectState } from '@/useState/projectState'


// 1. Define clear props interface
interface NewProjectProps {
  triggerText: string; // "New Project" or "Create"
 
}

function NewProject({ triggerText }: NewProjectProps) {
  const [open, setOpen] = useState(false)
  
  const {createProject,isloading}=useProjectState()
  const {user}=useAuthState()
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    createdBy:user?.id||" "
  })
  

  const handleSubmit = async (e:any) => {
    e.preventDefault()
    try {
      // 2. Execute the function passed from Dashboard
    
      await createProject(formData)
      
      setOpen(false) 
      setFormData({ name: '', description: '',createdBy:'' }) 
    } catch (err: any) {
      console.error("Failed to create project:", err.response?.data?.message || err.message)
    } 
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger >
        {/* asChild prevents button-inside-button errors if you pass a custom element */}
        <Button className="gap-2 bg-transparent ">
    
          {triggerText}
        </Button>
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <div className="flex items-center gap-2 text-indigo-600 mb-2">
              <FolderPlus className="h-5 w-5" />
              <DialogTitle>Create Project</DialogTitle>
            </div>
            <DialogDescription>
              Give your project a name and description to get started with your team.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-4 py-6">
            <div className="grid gap-2">
              <Label htmlFor="name">Project Name</Label>
              <Input
                id="name"
                placeholder="e.g. Website Redesign"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description (Optional)</Label>
              <Textarea
                id="description"
                placeholder="What is this project about?"
                className="resize-none"
                rows={3}
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
              />
            </div>
          </div>

          <DialogFooter>
            <Button 
              type="button" 
              variant="outline" 
              onClick={() => setOpen(false)}
              disabled={isloading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isloading || !formData.name} className="min-w-[100px]">
              {isloading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default NewProject