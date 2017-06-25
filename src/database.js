import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAtHd5szFOAgwjPCVmCj7AM54CNSnq9Ku0",
  authDomain: "weekend-todo.firebaseapp.com",
  databaseURL: "https://weekend-todo.firebaseio.com",
  projectId: "weekend-todo",
  storageBucket: "",
  messagingSenderId: "669502929906"

};

firebase.initializeApp(config);
cons database = firebase.database();

export default database;
