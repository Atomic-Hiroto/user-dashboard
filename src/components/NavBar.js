import { logOut } from '@/store/slices/authSlice';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export default function NavBar() {
    const state = useSelector((state) => state.authReducer);
    const dispatch = useDispatch()
  return (
    <div className="d-flex gap-4 p-4 align-items-center">
                    <p className='mb-0'>User Dashboard</p>
                    {state.isAuth ? <><p className='mb-0'>Welcome {state.userName}</p> <button className='btn btn-danger' onClick={()=>{
                      dispatch(logOut())
                      redirect('/')
                    }} >Logout</button></>: <>
                    <Link href={"/"}>
                    <button className='btn btn-primary'>Login</button></Link>
                    <Link href={"/signup"}>
                    <button className='btn btn-primary'>Sign Up</button></Link>
                    </> }
                </div>
  )
}
