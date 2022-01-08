import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAuJMMYypxQ8vcedTz9UMVDsqjGoWnGTsY',
  authDomain: 'netflix-clone-projectt.firebaseapp.com',
  projectId: 'netflix-clone-projectt',
  storageBucket: 'netflix-clone-projectt.appspot.com',
  messagingSenderId: '924041675015',
  appId: '1:924041675015:web:9a06e3c304c472519205a2',
  measurementId: 'G-G7QXV2VMXL',
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
