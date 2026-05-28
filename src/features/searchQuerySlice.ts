import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: "",
  genreId: "",
  order: "NUM_VOTE",
  year: "",
  type: "",
  page: 1,
  keyword: "",
};

export const searchQuerySlice = createSlice({
  name: "searchQuerySlice",
  initialState,
  reducers: {
    setFilters: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    resetQuery: () => ({
      ...initialState,
    }),
  },
});

export const { setFilters, resetQuery } = searchQuerySlice.actions;
export default searchQuerySlice.reducer;
