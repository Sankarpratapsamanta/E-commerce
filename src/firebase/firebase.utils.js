import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';


const config={
    apiKey: "AIzaSyCSTWvQWrmmj-2qeV0QlX0NAIA5veUWK9E",
    authDomain: "crwn-db-aee0b.firebaseapp.com",
    databaseURL: "https://crwn-db-aee0b.firebaseio.com",
    projectId: "crwn-db-aee0b",
    storageBucket: "crwn-db-aee0b.appspot.com",
    messagingSenderId: "450475721405",
    appId: "1:450475721405:web:72a26189cfd3685d5eedd4",
    measurementId: "G-XWC62SX9KK"
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider= new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt : 'select_account'});
export const signInWithGoogle =() => auth.signInWithPopup(provider);

export default firebase;