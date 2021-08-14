import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../utils/colors';

const NoData = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>No data to show</Text>
    </View>
  );
};

export default NoData;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: colors.primary,
  },
  text: {
    fontSize: 20,
    color: colors.secondary,
  },
});
