import React, {useState} from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';
import TopBar from '../../components/TopBar';
import { firebase } from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Profile = () => {
  const userCollection = firestore().collection('users');
  const currentUser = firebase.auth().currentUser;
  const [userName, setUserName] = useState('');
 
  const fetchData = async () => {
    userCollection.doc(currentUser.uid).get()
      .then(snapshot => setUserName(snapshot.data().name))
  }
  fetchData()
  

  return (
    <View>
      <TopBar />
      <Image source={require('../../assets/default-avatar.png')} style={styles.image} />
      <Text style={styles.userName}>{userName}</Text>
      <Text style={styles.userEmail}>{currentUser.email}</Text>
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
        fontSize: 40
    },
    userEmail: {
        alignSelf: 'center',
        fontSize: 20,
        color: 'grey',
        fontStyle: 'italic'
    }
});