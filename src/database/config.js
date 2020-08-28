import * as firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDn2e808m9Fb-vvbXuc5Y1fGuawwcSvWqI",
    authDomain: "photowall-20b9d.firebaseapp.com",
    databaseURL: "https://photowall-20b9d.firebaseio.com",
    projectId: "photowall-20b9d",
    storageBucket: "photowall-20b9d.appspot.com",
    messagingSenderId: "732131296565",
    appId: "1:732131296565:web:7e2c3ca78563176c94787c",
    measurementId: "G-JED0MBVNSN"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  const database = firebase.database()

  export {database}