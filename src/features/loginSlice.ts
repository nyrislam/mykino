import { createSlice } from "@reduxjs/toolkit";

export interface AuthState {
  username: string | null;
}

const token = localStorage.getItem("token");

const initialState = {
  username: token ? "USER" : "",
  isAuth: !!token,
};

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setDateUser: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { setDateUser } = loginSlice.actions;

export default loginSlice.reducer;
