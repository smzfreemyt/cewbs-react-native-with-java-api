import React from 'react';
import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';

// import { GoogleSignin } from '@react-native-google-signin/google-signin';

// GoogleSignin.configure({
//   webClientId: '',
// });

const GoogleAuth = () => {
    return (
        <TouchableOpacity>
            <Text style={styles.button}>Sign In with Google</Text>
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
