import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCsBhhkMuZpZZljK31NPBfqXeo6ORque6g",
  authDomain: "vue-firebase-2ddd9.firebaseapp.com",
  projectId: "vue-firebase-2ddd9",
  storageBucket: "vue-firebase-2ddd9.appspot.com",
  messagingSenderId: "929668216596",
  appId: "1:929668216596:web:08841bf482ebbad3f03401"
};

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectAuth, projectFirestore, timestamp }