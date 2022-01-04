import Firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyBp4P5snWUh-06R47Qta0Vup3ofA2VBj80",
  authDomain: "instagram-cfae7.firebaseapp.com",
  projectId: "instagram-cfae7",
  storageBucket: "instagram-cfae7.appspot.com",
  messagingSenderId: "457398656033",
  appId: "1:457398656033:web:e39bd6d11eb07ab8a05760",
  measurementId: "G-QBWP9FF29T",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
const storage = firebase.storage();

export { storage, firebase, FieldValue };
