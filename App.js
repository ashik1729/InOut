// Import necessary components and packages
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import PostDetailsScreen from "./screens/PostDetailsScreen";
import SplashScreen from "./screens/SplashScreen";
import { Provider } from 'react-redux';
import store from './redux/store/index';

// Create a stack navigator for navigation
const Stack = createStackNavigator();

// Define the main component of the app
const App = () => {
  return (
    // Wrap the entire app with the Redux Provider and pass the Redux store
    <Provider store={store}>
      {/* Navigation container to manage navigation */}
      <NavigationContainer>
        {/* Stack navigator to manage screens */}
        <Stack.Navigator initialRouteName="SplashScreen" headerShown={false} >
          {/* Define the Splash screen */}
          <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
          {/* Define the Home screen */}
          <Stack.Screen name="Home" component={HomeScreen}     options={{ headerShown: false }} // Hide header for the Home screen
 />
          {/* Define the Post Details screen */}
          <Stack.Screen name="Post Details" component={PostDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

// Export the main component as the default export
export default App;
