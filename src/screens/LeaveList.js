import React, { Component } from 'react';
import { IoIosAdd } from 'react-icons/io';
import { Button } from 'react-bootstrap';
import LeaveRequest from './LeaveRequest';
import './LeaveList.css';

export default class LeaveList extends Component {
    state = {
        show: false,
    }

    handleClose = () => {
        this.setState({ show: false });
    }

    onRequestLeaveClick = () => {
        this.setState({ show: true });
    }

    render() {
        const { show } = this.state;
        return (
            <div>
                <Button onClick={this.onRequestLeaveClick} variant="primary">
                    <IoIosAdd size={30} />
                    {' '}
                    Request Leave
                </Button>
                <LeaveRequest show={show} handleClose={this.handleClose} />
            </div>
        );
    }
}
