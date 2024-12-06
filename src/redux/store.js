import { configureStore } from "@reduxjs/toolkit";

// Import reducers
import  {authReducer}  from "./reducers/authReducers.js"
import {userReducer} from "./reducers/userReducers.js"
// Configure the store with reducers
const store = configureStore({
  reducer: {
    auth: authReducer,
    user:userReducer
  },
});

export default store;
