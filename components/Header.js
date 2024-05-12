// Import necessary components and packages
import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import logo from "./../assets/mylogo.png"; // Import your logo image

// Define the Header component
const Header = ({ navigation }) => {
  // Function to handle logo press, navigate to home screen
  const handleLogoPress = () => {
    navigation.navigate('Home'); // Replace 'Home' with the name of your home screen component
  };

  return (
    // Header container view
    <View style={[styles.header, Platform.OS === "ios" && styles.headerIos]}>
      {/* Logo image wrapped in TouchableOpacity to make it clickable */}
      <TouchableOpacity onPress={handleLogoPress}>
        <Image source={logo} style={styles.logo} />
      </TouchableOpacity>
    </View>
  );
};

// Styles for the Header component
const styles = StyleSheet.create({
  // Common header styles
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: Platform.OS === "ios" ? 40 : 40, // Adjust marginTop for iOS
    backgroundColor: "#2a55e5",
  },
  // Header styles specific to iOS
  headerIos: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginTop: 0, // No marginTop for iOS
    backgroundColor: "#2a55e5",
  },
  // Logo styles
  logo: {
    width: 30,
    height: 30,
  },
  // Navigation menu styles (if any)
  nav: {
    flexDirection: "row",
  },
  menuItem: {
    paddingLeft: 10,
    fontWeight: "500",
    color: "#fff",
  },
  // Search container styles (if any)
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginRight: 30,
    position: "relative",
  },
  searchIcon: {
    marginRight: 5,
    position: "absolute",
    right: 0,
    top: -10,
    color: "red",
  },
  searchInput: {
    height: 35,
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 30,
  },
});

// Export the Header component as the default export
export default Header;
