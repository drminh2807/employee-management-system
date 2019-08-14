import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './SignIn.css';
import { toast } from 'react-toastify';

const provider = new firebase.auth.GoogleAuthProvider();

export default class SignIn extends Component {
    state = {}

    onSignInClick = () => {
        firebase.auth().signInWithPopup(provider).then((result) => {
            toast.success(`Welcome ${result.user.displayName}!`);
        }).catch((error) => {
            toast.error(error.message);
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
                            <button type="button" onClick={this.onSignInClick} className="loginBtn loginBtn--google">Sign in with Google</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
