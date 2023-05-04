import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// import { createStore } from "redux";
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
