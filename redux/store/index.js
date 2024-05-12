// Import configureStore from Redux Toolkit to create the Redux store
import { configureStore } from "@reduxjs/toolkit";

// Import the rootReducer from the specified path
import rootReducer from "../reducers/index"; // Correct import statement

// Create the Redux store using configureStore
const store = configureStore({
  reducer: rootReducer, // Set the rootReducer as the reducer for the store
});

// Export the created Redux store
export default store;
