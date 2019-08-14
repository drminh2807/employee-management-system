import React, { Component } from 'react';
import {
    Navbar, Nav, NavDropdown
} from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import './Home.css';
import LeaveList from './LeaveList';

export default class Home extends Component {
    state = {}

    onLogoutClick = () => {
        firebase.auth().signOut();
    }

    render() {
        const { displayName, photoURL } = firebase.auth().currentUser;
        return (
            <Router>
                <Navbar bg="light" expand="lg" className="justify-content-between">
                    <Navbar.Brand href="#">BrightSoft EMS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            {/* <Nav.Link href="#">Leave Annoucement</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <NavDropdown title={(
                                <>
                                    {displayName}
                                    {' '}
                                    <img alt={displayName} src={photoURL} className="avatar" />
                                </>
                            )}
                            >
                                <NavDropdown.Item onClick={this.onLogoutClick}>Sign Out</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div style={{ margin: 15, }}>
                    <Route exact path="" component={LeaveList} />
                </div>

            </Router>
        );
    }
}
