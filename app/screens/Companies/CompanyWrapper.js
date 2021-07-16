import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Company from './Company';
import colors from '../../utils/colors';
import Services from './Services';

const Stack = createStackNavigator();

const App = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PartnersScreen"
        component={Company}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default App;
