import React from 'react';
import {StyleSheet, View} from 'react-native';
import {BottomNavigation} from 'react-native-paper';
import Home from '../screens/Home/Home';

const Navigation = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {
      key: 'partnerCompanies',
      title: 'Partner Companies',
      icon: 'brain',
    },
    {key: 'profile', title: 'Profile', icon: 'account-circle'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    partnerCompanies: Home,
    profile: Home,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Navigation;

const styles = StyleSheet.create({});
