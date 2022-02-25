import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAOvMgVEr2z9LLTTtVPgtzgAnh76O_3e9o",
  authDomain: "clone-8fe1a.firebaseapp.com",
  projectId: "clone-8fe1a",
  storageBucket: "clone-8fe1a.appspot.com",
  messagingSenderId: "353898119517",
  appId: "1:353898119517:web:bfe79e906c3425c6ef68b4",
  measurementId: "G-HM6YB5E0PN"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
