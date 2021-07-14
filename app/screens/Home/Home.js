import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from '../../components/TopBar';
import Filters from './Filters/Filters';
import Posts from './Posts/Posts';

const Home = () => {
  return (
    <View>
      <TopBar />
      <Filters />
      <Posts />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
