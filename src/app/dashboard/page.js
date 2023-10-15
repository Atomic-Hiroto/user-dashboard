"use client"
import React, { useEffect, useState } from 'react'
import ProtectedLayout from './protectedLayout'
import { useQuery, useSuspenseQuery } from '@apollo/experimental-nextjs-app-support/ssr';
import { gql } from '@apollo/client';

export const dynamic = "force-dynamic";

const query = gql`query getUsers {
    getUsers{
      username
      firstName
    }
}`;

export default function Dashboard() {
  const {data} = useSuspenseQuery(query)
  console.log(data)
  return (
    <ProtectedLayout>
      <main className={"d-flex m-5 flex-column align-items-center gap-5"}>
      <div>Dashboard</div>
      <div>

      </div>
      <div>
        {data.getUsers.map((user) => {
          return <div key={user.id}>
            User card
            {user.username}
            {user.firstName}  
            <button>Follow</button>
          </div>
        })}
      </div>
      </main>
    </ProtectedLayout>
  )
}