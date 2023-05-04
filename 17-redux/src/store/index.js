import { configureStore } from "@reduxjs/toolkit";

// import { createStore } from "redux";
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
const authInitialState = { isAuthenticated: false };

const authSlice = createSlice({
  name: "Auth",
  initialState: authInitialState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;

// const counterReducer = (state = initialState, action) => {
//   if (action.type === "INCREMENT") {
//     return {
//       counter: state.counter + 1,
//       showModal: state.showModal,
//     };
//   }
//   if (action.type === "DECREMENT") {
//     return {
//       counter: state.counter - 1,
//       showModal: state.showModal,
//     };
//   }
//   if (action.type === "incrementByValue") {
//     return {
//       counter: state.counter + action.value,
//       showModal: state.showModal,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       counter: state.counter,
//       showModal: !state.showModal,
//     };
//   }

//   return state;
// };

// const store = createStore(counterReducer);

// store.dispatch({ type: "INCREMENT" });
// store.dispatch({ type: "DECREMENT" });
// console.log(store.getState());
