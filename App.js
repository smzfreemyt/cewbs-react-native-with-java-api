import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './app/screens/Login/Login';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
                <Stack.Screen
                  name="Login"
                  component={Login}
                />
          </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
