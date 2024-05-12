// reducers/postsReducer.js

// Define the initial state for the posts reducer
const initialState = {
  posts: [],      // Array to store fetched posts
  loading: false, // Flag to indicate if data is being loaded
  error: null,    // Error message if data fetching fails
};

// Define the posts reducer function
const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_POSTS_SUCCESS':
      // Update state with fetched posts upon successful data retrieval
      return {
        ...state,
        posts: action.payload, // Update posts array with fetched data
        loading: false,        // Set loading to false
        error: null,           // Clear any previous error
      };
    case 'FETCH_POSTS_FAILURE':
      // Update state with error message if data fetching fails
      return {
        ...state,
        loading: false,        // Set loading to false
        error: action.error,   // Set error message
      };
    default:
      // Return the current state if the action type is unknown
      return state;
  }
};

// Export the posts reducer function
export default postsReducer;
