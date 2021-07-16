import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from '../../components/TopBar';

const Services = ({navigation}) => {
  return (
    <View>
      <TopBar />
      <Text onPress={() => navigation.goBack()}>Services</Text>
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({});
