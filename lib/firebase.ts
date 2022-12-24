import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDWYXnkIzaW7JMho4ggVfVYW8AkayTDs2c',
  authDomain: 'hi-patty.firebaseapp.com',
  projectId: 'hi-patty',
  storageBucket: 'hi-patty.appspot.com',
  messagingSenderId: '860031634179',
  appId: '1:860031634179:web:7eb887709b41fa71e93736',
  measurementId: 'G-B4KM2RVV3C',
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

export default firestore;
