import React from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import SignIn from './screens/SignIn';

console.log(process.env);

const {
    FIREBASE_API_KEY, FIREBASE_AUTH_DOMAIN, FIREBASE_DATABASE_URL,
    FIREBASE_PROJECT_ID, FIREBASE_STORAGE_BUCKET, FIREBASE_MESSAGING_SENDER_ID,
    FIREBASE_APP_ID
} = process.env;

firebase.initializeApp({
    apiKey: FIREBASE_API_KEY,
    authDomain: FIREBASE_AUTH_DOMAIN,
    databaseURL: FIREBASE_DATABASE_URL,
    projectId: FIREBASE_PROJECT_ID,
    storageBucket: FIREBASE_STORAGE_BUCKET,
    messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
    appId: FIREBASE_APP_ID
});

firebase.auth().useDeviceLanguage();

function App() {
    return (
        <div className="App">
            <SignIn />
        </div>
    );
}

export default App;
