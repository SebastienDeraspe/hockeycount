import firebase from 'firebase/app';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyDpwZGTV9_dQbGk04KrOmW_UPe8Nt6Gy1U",
    authDomain: "hockeycount.firebaseapp.com",
    databaseURL: "https://hockeycount-default-rtdb.firebaseio.com",
    projectId: "hockeycount",
    storageBucket: "hockeycount.appspot.com",
    messagingSenderId: "488246008787",
    appId: "1:488246008787:web:ec5d779ed4f30ef5132d26",
    measurementId: "G-6DNN2BPN2K"
}

if(!firebase.getApps.length) {
    firebase.initializeApp(config);
}

const firestore = firebase.firestore();

export { firestore };
