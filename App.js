import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// Screens for navigation
import HomeScreen from './src/views/HomeScreen/index';
import ScannerScreen from './src/views/ScannerScreen/index';
import ResultScreen from './src/views/ResultScreen/index';
import ManualInputScreen from './src/views/ManualInputScreen/index';


const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Scanner" component={ScannerScreen} />
        <Stack.Screen name="Manual Input" component={ManualInputScreen} />
        <Stack.Screen name="Results" component={ResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


