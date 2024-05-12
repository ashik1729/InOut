import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

// Footer component for navigation
const Footer = () => {
  // State to manage the active item in the footer
  const [activeItem, setActiveItem] = useState("Home");

  // Navigation hook
  const navigation = useNavigation();

  // Handler for item press
  const handlePress = (itemName, handleTo) => {
    setActiveItem(itemName);
    navigation.navigate(handleTo);
    // Add logic to navigate or perform actions based on the selected item
  };

  // Function to render footer item
  const renderItem = (itemName, iconSource, activeIcon, label, handleTo) => (
    <TouchableOpacity
      style={styles.footerItem}
      onPress={() => handlePress(itemName, handleTo)}
    >
      <Image
        source={activeItem === itemName ? activeIcon : iconSource}
        style={styles.icon}
      />
      <Text
        style={[styles.label, activeItem === itemName && styles.activeLabel]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.footer}>
      {/* Render Home item */}
      {renderItem(
        "Home",
        require("./../assets/home-icon.png"),
        require("./../assets/home-icon-active.png"),
        "Home",
        "Home"
      )}
      {/* Add more renderItem calls for other items as needed */}
    </View>
  );
};

// Styles for Footer component
const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
  },
  footerItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 8,
  },
  icon: {
    width: 16,
    height: 16,
    marginBottom: 4,
  },
  label: {
    fontSize: 10,
    color: "#908f8f", // Set the text color for inactive items
  },
  activeLabel: {
    color: "#733dff", // Set the text color for active items
  },
});

export default Footer;
