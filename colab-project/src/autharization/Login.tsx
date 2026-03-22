import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Loader2, Mail, Lock } from 'lucide-react'
import { useAuthState } from '@/useState/authState'
import { useNavigate } from 'react-router-dom'



export default function Login() {

  const {signIn,isLoading}=useAuthState()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate=useNavigate();

  const handleSubmit = async (e:any) => {
   e.preventDefault();
   signIn(formData);
   navigate("/")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 pt-2">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            id="email" 
            type="email" 
            placeholder="m@example.com" 
            className="pl-10" 
            required 
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <div className="relative">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            id="password" 
            type="password" 
            className="pl-10" 
            required 
            onChange={(e) => setFormData({...formData, password: e.target.value})}
          />
        </div>
      </div>
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Sign In"}
      </Button>
    </form>
  )
}