"use client"
import React, { useState } from 'react'

export default function SignUp() {
  const [user,setUser] = useState({
    firstName:"",
    lastName:"",
    username:"",
    phoneNumber:"",
    email:"",
    password:""
  })
  return (
    <main className={"d-flex justify-content-center flex-column align-items-center gap-5"}>
      <div>
          SignUp to use user dashboard.
      </div>
      <div className="d-flex flex-column gap-2">
        <label>First Name</label>
        <input placeholder='Enter your first name' value={user.firstName} onChange={(e)=>{setUser({...user,firstName:e.target.value})}} />
        <label>Last Name</label>
        <input placeholder='Enter your last name' value={user.lastName} onChange={(e)=>{setUser({...user,lastName:e.target.value})}}  />
        <label>Username</label>
        <input placeholder='Enter your username' value={user.username} onChange={(e)=>{setUser({...user,username:e.target.value})}}  />
        <label>Phone Number</label>
        <input placeholder='Enter your phone number' type='number' value={user.phoneNumber} onChange={(e)=>{setUser({...user,phoneNumber:e.target.value})}}  />
        <label>Email</label>
        <input placeholder='Enter your email' type='email' value={user.email} onChange={(e)=>{setUser({...user,email:e.target.value})}}  />
        <label>Password</label>
        <input placeholder='Enter your password' type='password' value={user.password} onChange={(e)=>{setUser({...user,password:e.target.value})}}  />
        <button className="btn btn-primary">Sign Up</button>
      </div>
    </main>
  )
}
