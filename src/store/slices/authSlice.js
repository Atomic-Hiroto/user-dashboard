"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth:true,
  userName:"",
  following:[]
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.isAuth = true;
    },
    logOut: (state) => {
        return initialState
    },
    setUsername: (state, action) => {
      state.userName = action.payload
    },
    addFollowing: (state, action) => {
      state.following.push(action.payload)
    }
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut, setUsername, addFollowing } = authSlice.actions

export default authSlice.reducer