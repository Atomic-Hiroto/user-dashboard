"use client"
import ProtectedLayout from './protectedLayout'
import { useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';
import { addFollowing } from '@/store/slices/authSlice';
import NavBar from '@/components/NavBar';

export const dynamic = "force-dynamic";

const queryGetAll = gql`query getUsers {
    getUsers{
      username
      firstName
    }
}`;

export default function Dashboard() {
  const dispatch = useDispatch()
  const {data} = useSuspenseQuery(queryGetAll)
  const username = useSelector(state => state.authReducer.userName);
  const following = useSelector(state => state.authReducer.following);
  
  return (
    <ProtectedLayout>
      <NavBar />
      <main className={"d-flex m-5 flex-column align-items-center gap-5"}>
      <div className='d-flex justify-content-space-between flex-column' >
        <p>{`Name: ${username}`}</p>
        <p>{`Following Count: ${following.length}`}</p>
      </div>
      <div className='d-flex flex-column gap-4'>
        {data.getUsers.map((user) => {
          return <div key={user.id} className='d-flex gap-3 p-2 flex-column card border-1 rounded'>
            {`Username: ${user.username} First Name: ${user.firstName}`} 
            <button className='btn btn-primary' onClick={(e)=>{
              dispatch(addFollowing(user.username))
            }}>{following.includes(user.username) ? "Unfollow" : "Follow" }</button>
          </div>
        })}
      </div>
      </main>
    </ProtectedLayout>
  )
}