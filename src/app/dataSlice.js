import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    allData: [],
    visibleData: [],
  },
  reducers: {
    setAllData: (state, action) => {
      state.allData = action.payload;
    },
    setVisibleData: (state, action) => {
      state.visibleData = action.payload;
    },
    loadMoreData: (state) => {
      const nextData = state.allData.slice(state.visibleData.length, state.visibleData.length + 10);
      state.visibleData = [...state.visibleData, ...nextData];
    },
  },
});

export const { setAllData, setVisibleData, loadMoreData } = dataSlice.actions;

export default dataSlice.reducer;
