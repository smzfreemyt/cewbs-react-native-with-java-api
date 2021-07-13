import React, { useState } from 'react'
import { StyleSheet, Alert, Linking, View, TouchableOpacity, Button, Image, TextInput, Text } from 'react-native'

const SignUp = ({ navigation }) => {
    return (
        <View style={styles.mainView}>
            <Image source={require('../../assets/Monstarlab_Logo_Yellow_PANTONE.png')} style={styles.image} />
            <Text style={styles.title}>EMPLOYEE WELL-BEING SYSTEM</Text>
            <Text style={styles.label}>Full Name</Text>
            <TextInput style={styles.textInput}></TextInput>
            <Text style={styles.label}>Email</Text>
            <TextInput style={styles.textInput}></TextInput>
            <Text style={styles.label}>Password</Text>
            <TextInput style={styles.textInput}></TextInput>
            
            <TouchableOpacity style={styles.signInButton}>
                <Text style={styles.signIn} >Register</Text>
            </TouchableOpacity>
            <Text style={styles.detail}>Already have an account?</Text>
            <Text style={[styles.detail, styles.register]}>Log in instead</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: '80%',
        height: '10%',
        resizeMode: 'contain',
        alignSelf: 'center',
    },
    mainView: {
        backgroundColor: '#53575A',
        flex: 1,
        justifyContent: 'center'
    },
    signIn: {
        color: 'black',
        alignSelf: 'center',
        fontSize: 18
    },
    signInButton: {
        backgroundColor:'#FFFF00',
        width: '30%',
        height: 35,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 10
    },
    title: {
        alignSelf: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        marginBottom: 70
    },
    label: {
        width: '90%',
        alignSelf: 'center',
        color: 'white',
        fontSize: 20
    },
    register: {
        fontStyle: 'italic',
        textDecorationLine: 'underline'
    },
    detail: {
        alignSelf: 'center',
        color: 'white',
    },
    textInput: {
        backgroundColor: 'white',
        width: '90%',
        alignSelf: 'center',
        marginBottom: 20
    },
})

export default SignUp;