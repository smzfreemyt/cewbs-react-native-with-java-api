import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  ToastAndroid,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {error, login, setToken} from '../../../stores/slices/authSlice';
import {Colors} from 'react-native-paper';
import GoogleAuth from '../GoogleAuth/GoogleAuth';
import Loading from '../../../components/Loading';
import colors from '../../../utils/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {STORAGE_NAME} from '../../../config/AppConfig';
import axios from '../../../axios';

const Login = ({toggleSignup}) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const [email, setEmail] = useState('usertest@admin.com');
  const [password, setPassword] = useState('test123');
  const [btnSignInDisabled, setBtnSignInDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginHandler = async () => {
    if (email === '' || password === '') {
      dispatch(error('Fields must not be empty'));
    } else {
      setLoading(true);
      axios
        .post('/login', {
          email,
          password,
        })
        .then(async response => {
          console.log(response.data);
          dispatch(
            login({
              ...response.data.user,
            }),
          );
          await AsyncStorage.setItem(STORAGE_NAME, response.data.token);
        })
        .catch(err => {
          console.log(err);
          if (err.response) {
            ToastAndroid.show(error.response.data.message, ToastAndroid.SHORT);
          }
        })
        .finally(() => {
          setBtnSignInDisabled(false);
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
        onPress={loginHandler}
        disabled={btnSignInDisabled}>
        <Text style={styles.signIn}>
          {!btnSignInDisabled ? 'Sign In' : 'Please wait...'}
        </Text>
      </TouchableOpacity>
      <Text style={styles.detail}>Don't have an account yet?</Text>
      <TouchableOpacity onPress={toggleSignup}>
        <Text style={[styles.detail, styles.register]}>Register</Text>
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
    paddingHorizontal: 25,
    paddingVertical: 7,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnDisabled: {
    backgroundColor: '#888',
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 30,
  },
  label: {
    width: '90%',
    alignSelf: 'center',
    color: 'white',
    fontSize: 20,
  },
  register: {
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  detail: {
    alignSelf: 'center',
    color: 'white',
  },
  textInput: {
    backgroundColor: colors.white,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 20,
    paddingLeft: 5,
  },
  error: {
    color: Colors.red300,
    textAlign: 'center',
  },
});

export default Login;
