import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDnDZZqz_5oExG2hgXAHwNM1shYWHPgud8",
  authDomain: "chatapp-1b30b.firebaseapp.com",
  projectId: "chatapp-1b30b",
  storageBucket: "chatapp-1b30b.appspot.com",
  messagingSenderId: "605397376798",
  appId: "1:605397376798:web:33ebf98729f1dba859730f"
};

// Initialize Firebase Authentication and get a reference to the service
let app;
if( firebase.apps.length === 0 ) {
  app = firebase.initializeApp(firebaseConfig);
}else{ 
  app = firebase.app()
}

const auth    = firebase.auth()
const db      = firebase.firestore();
var database  = app.database();

export { firebase ,  auth , db , database}