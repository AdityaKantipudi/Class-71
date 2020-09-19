import * as firebase from "firebase"
var firebaseConfig = {
    apiKey: "AIzaSyCSpAJ6hCB5hFiXGBbPClO4lAgP8wgwC3M",
    authDomain: "wily-app1-a5b86.firebaseapp.com",
    databaseURL: "https://wily-app1-a5b86.firebaseio.com",
    projectId: "wily-app1-a5b86",
    storageBucket: "wily-app1-a5b86.appspot.com",
    messagingSenderId: "864182943629",
    appId: "1:864182943629:web:39dabd3aaf89cba05607c4",
    measurementId: "G-GYBEBL8JMF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();