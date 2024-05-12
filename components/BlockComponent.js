import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Component responsible for displaying a list of posts
const BlockComponent = ({ posts }) => { // Destructure the posts prop
  // Navigation hook
  const navigation = useNavigation();
  // State to manage the index of the pressed post
  const [pressedIndex, setPressedIndex] = useState(null);

  // Handler for touch down event
  const handlePressIn = (index) => {
    setPressedIndex(index);
  };

  // Handler for touch up event
  const handlePressOut = () => {
    setPressedIndex(null);
  };

  // Handler for post press event
  const handlePress = (id, title, body) => {
    navigation.navigate('Post Details', { id, title, body });
  };

  // Render posts
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Posts</Text> 
  
      {/* Check if posts is not null or undefined, and if it's an array */}
      {posts && Array.isArray(posts) && posts.length > 0 ? (
        // If posts exist and is not empty, map over it
        posts.map((post, index) => (
          <TouchableOpacity
            key={post.id}
            style={[styles.post, index === pressedIndex && styles.zoom]}
            onPressIn={() => handlePressIn(index)}
            onPressOut={handlePressOut}
            onPress={() => handlePress(post.id, post.title, post.body)}
          >
            <Text style={styles.postTitle}>{post.title}</Text>
          </TouchableOpacity>
        ))
      ) : (
        // If posts is null, undefined, or empty, display a message
        <Text>No data found</Text>
      )}
    </View>
  );
};


// Styles for BlockComponent
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  post: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    padding: 10,
  },
  postTitle: {
    fontSize: 16,
  },
  zoom: {
    transform: [{ scale: 1.1 }],
  },
});

export default BlockComponent;
