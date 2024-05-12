// Import necessary components and packages
import React from "react";
import { StatusBar } from "expo-status-bar"; // Import StatusBar component from expo-status-bar
import { View, ScrollView, StyleSheet, Text, SafeAreaView } from "react-native"; // Import necessary components from react-native
import Header from "./../components/Header"; // Import Header component
import Footer from "./../components/Footer"; // Import Footer component

import BlockComponentWrapper from "./../components/BlockComponentWrapper"; // Import BlockComponentWrapper component

// Define the HomeScreen component
const HomeScreen = ({ navigation }) => {
  return (
    // SafeAreaView ensures that the content doesn't overlap with device-specific elements like the status bar
    <SafeAreaView style={styles.container}>
      {/* Header component */}
      <Header />
      {/* ScrollView for scrolling content */}
      <ScrollView>
        {/* BlockComponentWrapper component */}
        <BlockComponentWrapper />
      </ScrollView>
      {/* Footer component */}
      <Footer navigation={navigation} />
    </SafeAreaView>
  );
};

// Styles for the HomeScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1 // Take up the entire space of the parent container
  },
});

// Export the HomeScreen component as the default export
export default HomeScreen;
