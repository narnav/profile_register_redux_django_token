import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signin, signUp } from "./loginAPI";
import jwt_decode from "jwt-decode";

// State - data (init)
const initialState = {
  userName: "",
  email: "",
  token: "",
  logged: false,
  staff: false,
};
// async (1)
// simple async method (component can call it...)
export const doSigninAsync = createAsyncThunk("login/signin", async (xyz) => {
  console.log(xyz);
  const response = await signin(xyz);
  return response.data;
});

export const doSignupAsync = createAsyncThunk("login/signUp", async (cred) => {
  console.log(cred);
  const response = await signUp(cred);
  return response.data;
});

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state, action) => {
      console.log(action.payload);
      console.log("first");
      state.token = "";
      state.logged = false;
      state.userName = "";
      state.email = "";
    },
  },
  //  async  (3)
  //   happens when async done - callback
  extraReducers: (builder) => {
    builder
      .addCase(doSigninAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload.access) {
          state.token = action.payload.access;
          state.logged = true;
          state.userName = jwt_decode(action.payload.access).username;
          state.email = jwt_decode(action.payload.access).eeemail;
          state.staff = jwt_decode(action.payload.access).staff;
          // console.log( state.email)
        }
      })
      .addCase(doSignupAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        if (action.payload.access) {
          // state.token = action.payload.access
          // state.logged = true;
          // state.userName= jwt_decode(action.payload.access).username
          // state.email=jwt_decode(action.payload.access).eeemail
          // console.log( state.email)
        }
      });
  },
});

// export sync method
export const { logout } = loginSlice.actions;

// export any part of the state
export const selectLogged = (state) => state.login.logged;
export const selectEmail = (state) => state.login.email;
export const selectUserName = (state) => state.login.userName;
export const selectToken = (state) => state.login.token;
export const selectStaff = (state) => state.login.staff;
// export the reducer to the applicaion
export default loginSlice.reducer;
