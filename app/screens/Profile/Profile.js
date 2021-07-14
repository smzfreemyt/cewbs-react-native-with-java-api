import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import TopBar from '../../components/TopBar';

const Profile = () => {
  return (
    <View>
      <TopBar />
      <Image source={require('../../assets/default-avatar.png')} style={styles.image} />

    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
    image: {
        width: '50%',
        height: '50%',
        resizeMode: 'contain',
        alignSelf: 'center',
        borderRadius: 50,
        marginTop: '15%'
    }
});