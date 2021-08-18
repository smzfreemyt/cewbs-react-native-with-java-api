import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  ToastAndroid,
} from 'react-native';
import {Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import _auth from '../../../api/authService';
import Loading from '../../../components/Loading';
import {error, login} from '../../../stores/slices/authSlice';
import colors from '../../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_NAME, API_URL} from '../../../config/AppConfig';
import axios from 'axios';

const SignUp = ({toggleLogin}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('sam@test.com');
  const [name, setName] = useState('sam');
  const [password, setPassword] = useState('test12345');
  const [loading, setLoading] = useState(false);
  const errorMessage = useSelector(state => state.auth.errorMessage);
  const [btnSignupDisabled, setBtnSignupDisabled] = useState(false);


  const registerHandler = async () => {
    if (email === '' || name === '' || password === '') {
      dispatch(error('Fields must not be empty'));
    } else {
      setLoading(true);
      axios
        .post(`${API_URL}/register`, {
          name: name,
          email: email,
          password: password,
        })
        .then(response => {
          ToastAndroid.show("Successfully registered!", ToastAndroid.BOTTOM);
        })
        .catch(err => {
          if (err.response) {
            ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
          }
        })
        .finally(() => {
          setBtnSignupDisabled(false);
          setLoading(false);
        });
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.mainView}>
      <Image
        source={require('../../../assets/Monstarlab-logo-yellow.png')}
        style={styles.image}
      />
      <Text style={styles.title}>EMPLOYEE WELL-BEING SYSTEM</Text>
      <Text style={styles.label}>Full Name</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setName}
        value={name}
        placeholder="Full name"
      />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setEmail}
        value={email}
        placeholder="Email"
      />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        secureTextEntry={true}
      />
      <Text style={styles.error}>{errorMessage}</Text>

      <TouchableOpacity
        style={styles.signInButton}
        onPress={registerHandler}
        disabled={btnSignupDisabled}
      >
        <Text style={styles.signIn}>Register</Text>
      </TouchableOpacity>
      <Text style={styles.detail}>Already have an account?</Text>
      <TouchableOpacity onPress={toggleLogin}>
        <Text style={[styles.detail, styles.register]}>Log in instead</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '80%',
    height: '10%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  mainView: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center',
  },
  signIn: {
    color: colors.black,
    alignSelf: 'center',
    fontSize: 18,
  },
  signInButton: {
    backgroundColor: colors.secondary,
    width: '30%',
    height: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 70,
  },
  label: {
    width: '90%',
    alignSelf: 'center',
    color: colors.white,
    fontSize: 20,
  },
  register: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  detail: {
    alignSelf: 'center',
    color: colors.white,
  },
  textInput: {
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
  },
  error: {
    color: Colors.red300,
    textAlign: 'center',
  },
});

export default SignUp;
