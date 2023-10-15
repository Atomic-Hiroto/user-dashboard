"use client"
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAuth:false,
  userName:"",
  following:[]
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state,action) => {
      state.isAuth = true;
      state.userName = action.payload;
    },
    logOut: (state) => {
      state.isAuth = false;
      state.userName = "";
      state.following = [];
    },
    addFollowing: (state, action) => {
      if(!state.following.includes(action.payload)){
        state.following.push(action.payload)
      }else{
        state.following = state.following.filter(user => user !== action.payload)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { logIn, logOut, addFollowing } = authSlice.actions

export default authSlice.reducer