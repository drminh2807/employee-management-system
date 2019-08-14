import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase/app';
import { ToastContainer } from 'react-toastify';
import SignIn from './screens/SignIn';
import Home from './screens/Home';

const {
    REACT_APP_FIREBASE_API_KEY: apiKey,
    REACT_APP_FIREBASE_AUTH_DOMAIN: authDomain,
    REACT_APP_FIREBASE_DATABASE_URL: databaseURL,
    REACT_APP_FIREBASE_PROJECT_ID: projectId,
    REACT_APP_FIREBASE_STORAGE_BUCKET: storageBucket,
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID: messagingSenderId,
    REACT_APP_FIREBASE_APP_ID: appId,
} = process.env;

firebase.initializeApp({
    apiKey,
    authDomain,
    databaseURL,
    projectId,
    storageBucket,
    messagingSenderId,
    appId,
});

firebase.auth().useDeviceLanguage();

export default class App extends Component {
    state = { user: null }

    componentDidMount() {
        this.unscribleUser = firebase.auth().onAuthStateChanged((user) => {
            this.setState({ user });
        });
    }

    componentWillUnmount() {
        this.unscribleUser();
    }

    renderBody = () => {
        const { user } = this.state;
        if (user) {
            return <Home />;
        }
        return <SignIn />;
    }

    render() {
        return (
            <div className="App">
                <this.renderBody />
                <ToastContainer />
            </div>
        );
    }
}
