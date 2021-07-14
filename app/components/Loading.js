import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Spinner from 'react-native-spinkit';
import colors from '../utils/colors';

const Loading = () => {
  return (
    <View style={styles.container}>
      <Spinner color={colors.secondary} size={50} type="WanderingCubes" />
    </View>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
});
