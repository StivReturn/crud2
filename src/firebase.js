import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBoQ-v1JXtSIAOdwlgVtAYxR--FT9jHjvI",
    authDomain: "crud2-99dd4.firebaseapp.com",
    projectId: "crud2-99dd4",
    storageBucket: "crud2-99dd4.appspot.com",
    messagingSenderId: "452103465140",
    appId: "1:452103465140:web:c6e0960a4239574b38cfe1"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)

