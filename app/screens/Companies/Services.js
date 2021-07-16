import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from '../../components/TopBar';

const Services = ({navigation, route}) => {
  const {uid} = route.params;
  return (
    <View>
      <TopBar />
      <Text onPress={() => navigation.goBack()}>{uid}</Text>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
