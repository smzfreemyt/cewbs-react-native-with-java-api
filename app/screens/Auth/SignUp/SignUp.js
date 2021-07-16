import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  Text,
} from 'react-native';
import {Colors} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import _auth from '../../../api/authService';
import Loading from '../../../components/Loading';
import {error, login} from '../../../stores/slices/authSlice';

const SignUp = ({toggleLogin}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const registerHandler = async () => {
    setLoading(true)
    if (email === '' || name === '' || password === '') {
      dispatch(error('Fields must not be empty'));
    } else {
      const user = await _auth.signUpUsingEmailPassword(name, email, password);
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
          }),
        );
      } else {
        dispatch(error('There is problem in signing up!'));
      }
    }
    setLoading(false)
  };
  
  return loading ? (
    <Loading />
  ) : (
    <View style={styles.mainView}>
      <Image
        source={require('../../../assets/Monstarlab_Logo_Yellow_PANTONE.png')}
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

      <TouchableOpacity style={styles.signInButton} onPress={registerHandler}>
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
    marginTop: 30,
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 70,
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
  },
  error: {
    color: Colors.red300,
    textAlign: 'center',
  },
});

export default SignUp;
