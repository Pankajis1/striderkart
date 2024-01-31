import React, { useEffect, useState } from 'react'
import { Button } from "../components/ui/button"
import {
Card,
CardContent,
CardDescription,
CardFooter,
CardHeader,
CardTitle,
} from "../components/ui/card"
import { Input } from "../components/ui/input"
import { Label } from "../components/ui/label"
import {
Select,
SelectContent,
SelectItem,
SelectTrigger,
SelectValue,
} from "../components/ui/select"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs"
import { NavLink, useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginCred,setLoginCred]=useState({email:"",password:""})
  useEffect(()=>{console.log(loginCred)},[loginCred])
  const navigate=useNavigate()
  const usersInDb=[{email:'example@gmail.com',password:'1234'}]
  const handleUserLogin=()=>{
    const user=usersInDb.find(u=>u.email===loginCred.email)
    if(user) {localStorage.setItem('isLoggedIn',true);navigate('/')}
  }

  return (<>
        <Card className="w-[400px]">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Enter your login credentials.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input id="email"  onChange={(e)=>setLoginCred({...loginCred,email:e.target.value})}/>
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input id="password" onChange={(e)=>setLoginCred({...loginCred,password:e.target.value})}/>
            </div>
          </CardContent>
          <CardFooter>
            <Button onClick={()=>handleUserLogin()}>Login</Button>
            <NavLink style={{textDecoration:'underline',marginLeft:'10px'}}>New Here? Create Account</NavLink>
          </CardFooter>
        </Card>

</>
  )
}

export default Login


