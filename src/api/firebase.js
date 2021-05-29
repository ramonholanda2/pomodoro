import firebase from 'firebase';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBQzBdGY6ZeFJiPxwW_xuO-NjZQQqlzl1k",
    authDomain: "todolist-34068.firebaseapp.com",
    projectId: "todolist-34068",
    storageBucket: "todolist-34068.appspot.com",
    messagingSenderId: "474063833088",
    appId: "1:474063833088:web:36a2439ca7188060d430e5",
    measurementId: "G-T0P47BLFRC"
})

const db = firebaseApp.firestore();

export default db;
