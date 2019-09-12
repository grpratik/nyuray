import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Replace this with your own config details
const firebaseConfig = {
  apiKey: "AIzaSyAQv1WgjSHaOYo7mumy0xlzBplRBl4plnw",
  authDomain: "vidyalayamitra.firebaseapp.com",
  databaseURL: "https://vidyalayamitra.firebaseio.com",
  projectId: "vidyalayamitra",
  storageBucket: "",
  messagingSenderId: "513175272437",
  appId: "1:513175272437:web:7aaefc1902b4fab0"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;