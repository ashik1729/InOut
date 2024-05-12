import React, { useEffect, useState } from 'react';

import {
  View,
  StyleSheet,
  Button
} from "react-native";
import { fetchPosts } from '../redux/actions/postActions';
import { useDispatch, useSelector } from 'react-redux';

import BlockComponent from "./BlockComponent";

// Component responsible for rendering BlockComponent within a wrapper
const BlockComponentWrapper = () => {
  // State to manage loading state
  const [isLoading, setLoading] = useState(true);

  // State to manage data
  const [data, setData] = useState([]);
  // Redux hook to dispatch actions
  const dispatch = useDispatch();

  // Fetch posts from Redux store on component mount
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Select posts, loading, and error state from Redux store
  const posts = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);
  const error = useSelector(state => state.posts.error);

  useEffect(() => {
    setData(posts)
  }, [posts]);

  // Render loading state
  if (loading) {
    return <Text>Loading...</Text>;
  }
  if (!posts) {
    return <Text>Loading...</Text>;
  }

  // Render error state
  if (error) {
    // Show alert if there are no posts or an error occurs
    Alert.alert(
      'Error',
      error ? `Error: ${error}` : 'No posts available',
      [
        {
          text: 'OK',
          onPress: () => console.log('OK pressed'),
        },
      ],
      { cancelable: false }
    );
    // Return null to prevent rendering of the component
    return null;
  }
  return (
    <View style={styles.pageContainer}>
      {/* Container for BlockComponent */}
      {/* <Button
        title="Trigger Crash"
        onPress={() => {
          throw new Error("This is a test crash!");
        }}
      /> */}
      <View style={styles.rowContainer}>
        {/* Render BlockComponent */}
        <BlockComponent posts={data} />
      </View>
    </View>
  );
};

// Styles for BlockComponentWrapper
const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    padding: 2,
    backgroundColor: "#fff", // Background color
  },
  rowContainer: {
    flexDirection: "row", // Layout direction
    justifyContent: "space-between", // Alignment of items
    marginBottom: 16, // Margin bottom
  },
});

export default BlockComponentWrapper;
