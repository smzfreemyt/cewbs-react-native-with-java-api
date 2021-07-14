import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './Home';
import colors from '../../utils/colors';
import Company from '../Companies/Company';
import { useDispatch } from 'react-redux';
import { logout } from '../../stores/slices/authSlice';

const Tab = createMaterialBottomTabNavigator();

const HomeWrapper = () => {
  const dispatch = useDispatch();
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.white}
      inactiveColor={colors.darkGrey}
      barStyle={styles.bottomBar}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Companies"
        component={Company}
        options={{
          tabBarLabel: 'Partners',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="brain" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Home}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Logout"
        component={Home}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="logout" color={color} size={26} />
          ),
        }}
        listeners={() => ({
          tabPress: (e) => {
              e.preventDefault();
              dispatch(logout());
          }
        })}
      />
    </Tab.Navigator>
  );
};

export default HomeWrapper;

const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: colors.primary,
  },
});
