// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import 'firebase/compat/auth';
import { getAuth, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyDsfr7mqx6XvPr4mq_fzsz2ANIJbMzxTuM",
    authDomain: "movie-list-react-b3d4b.firebaseapp.com",
    projectId: "movie-list-react-b3d4b",
    storageBucket: "movie-list-react-b3d4b.appspot.com",
    messagingSenderId: "519838858998",
    appId: "1:519838858998:web:f3d675d7efb7e2e44036d7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
getRedirectResult(auth)
.then((result) => {
    // This gives you a Google Access Token. You can use it to access Google APIs.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;

    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
}).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
});
export const googleProvider = new GoogleAuthProvider();
