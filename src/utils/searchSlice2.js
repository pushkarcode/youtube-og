import { createSlice } from "@reduxjs/toolkit";

const searchSlice2 = createSlice({
  name: "search2",
  initialState: {
    video: [],
  },
  reducers: {
    setSearchVideo: (state, action) => {
      state.video = action.payload;
    },
  },
});

export const { setSearchVideo } = searchSlice2.actions;
export default searchSlice2.reducer;
