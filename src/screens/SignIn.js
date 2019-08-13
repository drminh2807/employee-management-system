import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './SignIn.css';

const provider = new firebase.auth.GoogleAuthProvider();

export default class SignIn extends Component {
    state = {}

    onSignInPress = () => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const token = result.credential.accessToken;
            // The signed-in user info.
            const { user } = result;
            // ...
            console.log({ user });
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const { email } = error;
            // The firebase.auth.AuthCredential type that was used.
            const { credential } = error;
            // ...
            console.log({ error });
        });
    }

    render() {
        return (
            <div className="d-flex align-items-center sign-in-background">
                <Container>
                    <Row>
                        <Col>
                            <h1>Bright Soft</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h3>Employee Management System</h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={{ order: 2 }}>
                            <button type="button" className="loginBtn loginBtn--google">Login with Google</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
