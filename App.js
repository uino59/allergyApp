import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react'



// Screens for navigation
import HomeScreen from './src/views/HomeScreen/index';
import ScannerScreen from './src/views/ScannerScreen/index';
import ResultScreen from './src/views/ResultScreen/index';
import ManualInputScreen from './src/views/ManualInputScreen/index';
import AllergensScreen from './src/views/AllergensScreen/index';

// Helper functions
import { getOrCreateUserPreferences } from './src/services/Functions';


const Stack = createNativeStackNavigator();


export default function App() {
  global.userData = null;
    
  // Get saved preferences or create blank user if none found
  React.useEffect(() => {
    getOrCreateUserPreferences();
  }, [])

  
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Allergens" component={AllergensScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Manual Input" component={ManualInputScreen} />
        <Stack.Screen name="Results" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


