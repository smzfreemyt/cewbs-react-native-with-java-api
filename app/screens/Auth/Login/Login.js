import React, {useState, useEffect} from 'react';
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
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../../components/Loading';

const Login = ({toggleSignup}) => {
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.auth.errorMessage);

  const [email, setEmail] = useState('user@user.com');
  const [password, setPassword] = useState('test123');
  const [btnSignInDisabled, setBtnSignInDisabled] = useState(false);
  const [uid, setUid] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (user) {
        firestore()
          .collection('users')
          .doc(user.uid)
          .get()
          .then(documentSnapshot => {
            const {name, role} = documentSnapshot.data();
            dispatch(
              login({
                email: user.email,
                uid: user.uid,
                name,
              }),
            );
          });
      }
    });
    return subscriber;
  }, [uid, dispatch]);

  const loginHandler = async () => {
    if (email === '' || password === '') {
      dispatch(error('Fields must not be empty'));
    } else {
      try {
        setBtnSignInDisabled(true);
        setLoading(true);
        const data = await _auth.signInUsingEmailPassword(email, password);
        setLoading(false);
        if (data) {
          const user = data.user;
          setEmail(user.email);
          setUid(user.uid);
        } else {
          dispatch(error('There is problem in signing in!'));
        }
      } catch (e) {
        console.log('error' + e);
      } finally {
        setBtnSignInDisabled(false);
      }
    }
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
