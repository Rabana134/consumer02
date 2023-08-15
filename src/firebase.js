import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/database"
import 'firebase/compat/storage';
import 'firebase/compat/firestore';


var app = firebase.initializeApp({
  apiKey: "AIzaSyCsyBcDxd1j9WJm7Iu-ly47saOFzYN-zfA",
  authDomain: "loggworks-c8da7.firebaseapp.com",
  projectId: "loggworks-c8da7",
  storageBucket: "loggworks-c8da7.appspot.com",
  messagingSenderId: "379137367944",
  appId: "1:379137367944:web:c78be5584c4e57247b643d"
})
export const storage = app.storage();

export var auth = app.auth();
export const db = app.firestore();
export {firebase}
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default app
