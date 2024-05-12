import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Component for displaying post details
const PostDetailsComponent = ({ id, title, body }) => {
  return (
    <View style={styles.container}>
      {/* Title of the post */}
      <Text style={styles.title}>{title}</Text>
      {/* Container for ID */}
      <View style={styles.idContainer}>
        <Text style={styles.idLabel}>ID: </Text>
        {/* ID of the post */}
        <Text style={styles.id}>{id}</Text>
      </View>
      {/* Body of the post */}
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  idContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', // Aligns the ID section to the right
    marginBottom: 10,
  },
  idLabel: {
    fontSize: 16,
  },
  id: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default PostDetailsComponent;
