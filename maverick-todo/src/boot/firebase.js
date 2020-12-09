import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyDuGCB414ZjB-n-0nmANQgMb5HkYfSPNNU",
  authDomain: "mavericks-8a775.firebaseapp.com",
  databaseURL: "https://mavericks-8a775.firebaseio.com",
  projectId: "mavericks-8a775",
  storageBucket: "mavericks-8a775.appspot.com",
  messagingSenderId: "429677601",
  appId: "1:429677601:web:4e3f5cd3f8e1475b969760"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }

