import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// should be in .env
GoogleSignin.configure({
    webClientId: '398824603559-6uvpant4868ca8i4v827emb7tnj7q9nf.apps.googleusercontent.com',
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
