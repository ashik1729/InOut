// Import combineReducers from Redux to combine multiple reducers into one
import { combineReducers } from 'redux';

// Import the postsReducer from the specified path
import postsReducer from '../reducers/postsReducers'; // Correct import statement

// Combine all reducers into a single rootReducer
const rootReducer = combineReducers({
  posts: postsReducer, // Assign the postsReducer to the 'posts' key in the root state
  // Add other reducers here if you have them
});

// Export the rootReducer
export default rootReducer;
