import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDD1_H3ZooDeEvDQyP1XtjHHmbVeVyymhU",
    authDomain: "todo-list-8f8d9.firebaseapp.com",
    databaseURL: "https://todo-list-8f8d9.firebaseio.com",
    projectId: "todo-list-8f8d9",
    storageBucket: "todo-list-8f8d9.appspot.com",
    messagingSenderId: "376086795566"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const auth = firebase.auth();

export {
    auth
};
