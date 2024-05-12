// actions/postActions.js

// Action creator to fetch posts asynchronously
export const fetchPosts = () => async (dispatch) => {
  try {
    // Send a request to fetch posts from a remote API
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    // Extract JSON data from the response
    const data = await response.json();

    // Dispatch an action with the fetched data upon success
    dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
  } catch (error) {
    // Dispatch an action with the error message upon failure
    dispatch({ type: 'FETCH_POSTS_FAILURE', error: error.message });
  }
};
