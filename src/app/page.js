"use client"
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Home() {
  const [user,setUser] = useState({
    email:"",
    password:""
  })
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      window.location.href = "/dashboard"
    }
  })

  return (
    <main className={"d-flex justify-content-center flex-column align-items-center gap-5"}>
      <div>
          Welcome to User Dashboard!
          Kindly Login or <Link href="/signup">Signup</Link> to access the dashboard.
      </div>
      <div className="d-flex flex-column gap-2">
        <label>Email</label>
        <input placeholder='Enter your email' type='email' value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})} />
        <label>Password</label>
        <input placeholder='Enter your password' type='password' value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})} />
        <button className="btn btn-primary">login</button>
      </div>
    </main>
  )
}
