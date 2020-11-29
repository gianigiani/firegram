// import * as firebase from "firebase/app";
import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB_g05uj-muEIvPaeURcRkRoE67p26Pd9Q",
  authDomain: "ninja-firegram-8ddc3.firebaseapp.com",
  databaseURL: "https://ninja-firegram-8ddc3.firebaseio.com",
  projectId: "ninja-firegram-8ddc3",
  storageBucket: "ninja-firegram-8ddc3.appspot.com",
  messagingSenderId: "252638043374",
  appId: "1:252638043374:web:488d3fa8154b517c5d27ff",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
