import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  TouchableOpacity,
} from 'react-native';
import colors from '../utils/colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch} from 'react-redux';
import {setRefresh} from '../stores/slices/appSlice';

const Logo = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.logoContainer}>
      <Image source={require('../assets/logo.png')} style={styles.logo} />
      <TouchableOpacity
        style={styles.refresh}
        onPress={() => {
          dispatch(setRefresh(true));
          ToastAndroid.show('Refreshing...', ToastAndroid.SHORT);
        }}>
        <MaterialCommunityIcons name="refresh" color={colors.secondary} size={26} />
      </TouchableOpacity>
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
  refresh: {
    position: 'absolute',
    right: 5,
  },
});
