import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {error, login} from '../../../stores/slices/authSlice';
import _auth from '../../../api/authService';
import {Colors} from 'react-native-paper';
import GoogleAuth from '../GoogleAuth/GoogleAuth';

const Login = ({toggleSignup}) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const [email, setEmail] = useState('user@user.com');
  const [password, setPassword] = useState('test123');

  const loginHandler = async () => {
    if (email === '' || password === '') {
      dispatch(error('Fields must not be empty'));
    } else {
      const user = await _auth.signInUsingEmailPassword(email, password);
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
          }),
        );
      } else {
        dispatch(error('There is problem in signing in!'));
      }
    }
  };

  return (
    <View style={styles.mainView}>
      <Image
        source={require('../../../assets/Monstarlab_Logo_Yellow_PANTONE.png')}
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

      <TouchableOpacity style={styles.signInButton} onPress={loginHandler}>
        <Text style={styles.signIn}>Sign In</Text>
      </TouchableOpacity>
      <Text style={styles.detail}>Don't have an account yet?</Text>
      <TouchableOpacity onPress={toggleSignup}>
        <Text style={[styles.detail, styles.register]}>Register</Text>
      </TouchableOpacity>

      <GoogleAuth />
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
    backgroundColor: '#53575A',
    flex: 1,
    justifyContent: 'center',
  },
  signIn: {
    color: 'black',
    alignSelf: 'center',
    fontSize: 18,
  },
  signInButton: {
    backgroundColor: '#FFFF00',
    width: '30%',
    height: 35,
    alignSelf: 'center',
    justifyContent: 'center',
    marginBottom: 10,
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
    backgroundColor: 'white',
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
