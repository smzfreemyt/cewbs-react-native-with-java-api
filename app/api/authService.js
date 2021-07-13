import auth from '@react-native-firebase/auth';

const _auth = auth();

//login using email/password
const loginUsingEmailPassword = async (email, password) => {
  const user = await _auth.signInWithEmailAndPassword(email, password);
  console.log(user);
};

export default {
  loginUsingEmailPassword,
};
