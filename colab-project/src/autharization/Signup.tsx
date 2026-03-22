import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { User, Mail, Lock, Loader2 } from 'lucide-react'
import { useAuthState } from '@/useState/authState'
import { Navigate } from 'react-router-dom'


export default function Signup() {
  
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' })
  const {signUp,isLoading,checkAuth}=useAuthState()
  const handleSubmit = async (e:any) => {
   e.preventDefault()
   try{
    
    await signUp(formData);
    <Navigate to="/chat"/>
     
   }
    catch(error){
        console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-2">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <div className="relative">
          <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            id="name" 
            placeholder="John Doe" 
            className="pl-10" 
            required 
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="signup-email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            id="signup-email" 
            type="email" 
            placeholder="m@example.com" 
            className="pl-10" 
            required 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="signup-password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            id="signup-password" 
            type="password" 
            className="pl-10" 
            required 
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
      </div>
      <Button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700" disabled={isLoading}>
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Create Account"}
      </Button>
    </form>
  )
}