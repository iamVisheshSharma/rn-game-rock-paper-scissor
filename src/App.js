
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import GamePage from './GamePage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='HomePage' component={HomePage} />
        <Stack.Screen name='GamePage' component={GamePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
