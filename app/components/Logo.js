import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Logo = () => {
  return (
    <View style={styles.logoContainer}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
});
