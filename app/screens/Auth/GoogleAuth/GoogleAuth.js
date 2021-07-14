import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { signInWithGoogle } from '../../../api/googleAuthService';
import { login, error } from '../../../stores/slices/authSlice';
import auth from '@react-native-firebase/auth';


const GoogleAuth = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [name, setName]   = useState('');

    const onGoogleButtonPress = ()  => {
        signInWithGoogle()
        .then(response => {
            const profile = response.additionalUserInfo.profile;
            setEmail(profile.email);
            setName(profile.name);
        });
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(user => {
            if (user) {
                console.log('user'+ JSON.stringify(user));
                dispatch(
                    login({
                        email: user.email,
                        name: user.name
                    })
                )
            }
        });
        return subscriber;
    }, [email, name]);
    

    return (
        <TouchableOpacity
            onPress={onGoogleButtonPress}
        >
            <Text style={styles.button}>
                Sign In with Google
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
