import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// should be in .env
GoogleSignin.configure({
    webClientId: '657350341721-bgkgnc8v0lvau9dml8kmq4ovuqpkbu8j.apps.googleusercontent.com',
});

  
const signInWithGoogle = async () => {
    try {
        const { idToken } = await GoogleSignin.signIn();
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);
        const result = auth().signInWithCredential(googleCredential);
        return result;
    } catch(e){
        console.log('error' + e);
    }
}

export{
    signInWithGoogle,
}
