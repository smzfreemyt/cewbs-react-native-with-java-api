import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import TopBar from '../../components/TopBar';
import {useSelector} from 'react-redux';

const Profile = () => {
  const user = useSelector(state => state.auth.currentUser);

  return (
    <View>
      <TopBar />
      <Image
        source={require('../../assets/default-avatar.png')}
        style={styles.image}
      />
      <Text style={styles.userName}>{user.name}</Text>
      <Text style={styles.userEmail}>{user.email}</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
    alignSelf: 'center',
    borderRadius: 50,
    marginTop: '15%',
  },
  userName: {
    alignSelf: 'center',
    fontSize: 40,
  },
  userEmail: {
    alignSelf: 'center',
    fontSize: 20,
    color: 'grey',
    fontStyle: 'italic',
  },
});
