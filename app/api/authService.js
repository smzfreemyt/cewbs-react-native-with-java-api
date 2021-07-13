import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const userCollection = firestore().collection('users');

//login using email/password
const signInUsingEmailPassword = async (email, password) => {
  let user;
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(data => {
      user = data;
    })
    .catch(() => console.log('Login fail'));
  return user;
};

//Sign up user
const signUpUsingEmailPassword = async (name, email, password) => {
  let user;
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(async data => {
      user = data;
      await userCollection.doc(user.uid).set({
        name,
        role: 'user',
      });
    })
    .catch(() => console.log('Sign up fail'));
  return user;
};

export default {
  signInUsingEmailPassword,
  signUpUsingEmailPassword,
};
