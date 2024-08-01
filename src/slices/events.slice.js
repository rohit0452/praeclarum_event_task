import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    data: [],
  },
  reducers: {
    addevent: (state, action) => {
      state.data.push(action.payload);
    },
    editevent: (state, action) => {
      const index = state.data.findIndex(
        (event) => event.id === action.payload.id
      );
      if (index !== -1) state.data[index] = action.payload;
    },
    deleteevent: (state, action) => {
      const index = state.data.findIndex(
        (event) => event.id === action.payload.id
      );
      state.data.splice(index, 1);
    },
  },
});

export const { addevent, deleteevent, editevent } = eventSlice.actions;
export default eventSlice.reducer;
