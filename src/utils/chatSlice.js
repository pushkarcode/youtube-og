import { createSlice } from "@reduxjs/toolkit";
import { OFF_SET_LIVECHAT } from "./constant";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    message: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state.message.splice(OFF_SET_LIVECHAT, 1);
      state.message.unshift(action.payload);
    },
  },
});

export const { addMessage } = chatSlice.actions;
export default chatSlice.reducer;
