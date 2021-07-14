import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TopBar from '../../components/TopBar';
import Filters from './Filters/Filters';
import Posts from './Posts/Posts';
import { useSelector } from 'react-redux';

const Home = () => {
  const user = useSelector(state => {
    return state.auth.currentUser;
  });
  console.log(user.email);
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
