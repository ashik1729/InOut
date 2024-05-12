import React from 'react';
import { View, ScrollView, StyleSheet, Text, SafeAreaView } from "react-native";
import PostDetailsComponent from '../components/PostDetailsComponent';
import Footer from "./../components/Footer";

// PostDetailsScreen component to display details of a post
const PostDetailsScreen = ({ navigation, route }) => {
  // Extracting parameters from the route
  const { id, title, body } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      {/* Scrollable container */}
      <ScrollView>
        {/* Render the PostDetailsComponent with post details */}
        <PostDetailsComponent id={id} title={title} body={body} />
      </ScrollView>
      {/* Footer component */}
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

// Styles for the PostDetailsScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1 // Fill the available space
  },
});

export default PostDetailsScreen;
