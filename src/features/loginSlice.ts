import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  username: string;
}

const initialState: CounterState = {
  username: "",
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
