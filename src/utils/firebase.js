import firebase from 'firebase';

const prodConfig = {
  apiKey: 'AIzaSyBwKMX_PUpF6CeEW6P5hQmtLNV7HdG__Us',
  authDomain: 'cokecounter-cf4a9.firebaseapp.com',
  databaseURL: 'https://cokecounter-cf4a9.firebaseio.com',
  projectId: 'cokecounter-cf4a9',
  storageBucket: 'cokecounter-cf4a9.appspot.com',
  messagingSenderId: '664554306342'
};

const devConfig = {
  apiKey: 'AIzaSyBwKMX_PUpF6CeEW6P5hQmtLNV7HdG__Us',
  authDomain: 'cokecounter-cf4a9.firebaseapp.com',
  databaseURL: 'https://cokecounter-cf4a9.firebaseio.com',
  projectId: 'cokecounter-cf4a9',
  storageBucket: 'cokecounter-cf4a9.appspot.com',
  messagingSenderId: '664554306342'
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();
