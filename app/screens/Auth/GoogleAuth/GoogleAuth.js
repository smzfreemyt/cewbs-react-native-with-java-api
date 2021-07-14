import React, { useDis} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import auth from '@react-native-firebase/auth';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { login, error } from '../../../stores/slices/authSlice';

// be in .env
GoogleSignin.configure({
  webClientId: '657350341721-bgkgnc8v0lvau9dml8kmq4ovuqpkbu8j.apps.googleusercontent.com',
});

const onGoogleButtonPress = async ()  => {
    try {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const result = auth().signInWithCredential(googleCredential);
        return result;
    } catch(e){
        console.log('error' + e);
    }
}

const GoogleAuth = () => {
    const dispatch = useDispatch();
    return (
        <TouchableOpacity
            onPress={() => {
                onGoogleButtonPress().then(response => {
                    const profile = response.additionalUserInfo.profile;
                    dispatch(
                        login({
                            email: profile.email,
                            name: profile.name
                        })
                    )
                });
            }}
        >
            <Text style={styles.button}>
                Sign In with Google daw
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#FFFF00',
        alignSelf: 'center',
        justifyContent: 'center',
        color: '#333',
        marginTop: 30,
        paddingHorizontal: 25,
        paddingVertical: 12,
        fontWeight: 'bold',
    }
});

export default GoogleAuth
