import firebase from "firebase/app"

import "firebase/auth"
import "firebase/database"

// ADD YOUR FIREBASE CONFIG OBJECT HERE:
const firebaseConfig = {
  apiKey: "AIzaSyDf6f3vNdRDO1K25SAgmmi-64jEc1IxSxQ",
  authDomain: "mavs-f482a.firebaseapp.com",
  databaseURL: "https://mavs-f482a.firebaseio.com",
  projectId: "mavs-f482a",
  storageBucket: "mavs-f482a.appspot.com",
  messagingSenderId: "769219588177",
  appId: "1:769219588177:web:02c5bda6859e4d2aa50870"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)
let firebaseAuth = firebaseApp.auth()
let firebaseDb = firebaseApp.database()

export { firebaseAuth, firebaseDb }

