"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loggedIn:false,
  userName:""
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    logOut: (state) => {
        return initialState
    },
    setUsername: (state, action) => {
      state.userName = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut, setUsername } = authSlice.actions

export default authSlice.reducer