import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// SplashScreen component to display a loading indicator or splash animation
const SplashScreen = () => {
  // Access navigation methods from the hook
  const navigation = useNavigation();

  // useEffect hook to perform navigation after a delay
  useEffect(() => {
    // Simulate a delay for the splash screen
    const timeout = setTimeout(() => {
      // Navigate to the main screen after 2 seconds (adjust as needed)
      navigation.navigate('Home');
    }, 2000); // 2000 milliseconds = 2 seconds

    // Clear timeout when the component unmounts to avoid memory leaks
    return () => clearTimeout(timeout);
  }, [navigation]); // useEffect dependency to ensure navigation is called only once

  return (
    <View style={styles.container}>
      {/* Loader animation or image */}
      <ActivityIndicator size="large" color="#2a55e5" />
    </View>
  );
};

// Styles for the SplashScreen component
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center content vertically
    alignItems: 'center', // Center content horizontally
    backgroundColor: '#ffffff', // Adjust background color as needed
  },
});

export default SplashScreen;
