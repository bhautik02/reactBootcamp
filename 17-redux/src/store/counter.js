import { createSlice } from "@reduxjs/toolkit";

const counterInitialState = { counter: 0, showModal: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showModal = !state.showModal;
    },
  },
});

export default counterSlice.reducer;
