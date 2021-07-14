import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { signInWithGoogle } from '../../../api/googleAuthService';
import { login, error } from '../../../stores/slices/authSlice';


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
        if (email && name) {
            dispatch(
                login({
                    email: email,
                    name: name
                })
            )
            console.log('logged');
        }
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
