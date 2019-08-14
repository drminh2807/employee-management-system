import React, { Component } from 'react';
import {
    Modal, Button, Form, ButtonGroup,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default class LeaveRequest extends Component {
    state = {
        startDate: new Date(),
        startDateType: 'DAY',
    }

    onSubmit = () => {
        alert('submit');
    }

    renderDateTypeToggle = () => {
        const { startDateType } = this.state;
        const data = ['DAY', 'AM', 'PM'];
        return (
            <div>
                <ButtonGroup style={{ width: '100%', padding: 12 }} toggle>
                    {data.map((type) => (
                        <Button
                            onClick={() => { this.setState({ startDateType: type }); }}
                            key={type}
                            variant={type === startDateType ? 'primary' : 'outline-primary'}
                        >
                            {type}
                        </Button>
                    ))}
                </ButtonGroup>
            </div>
        );
    }

    render() {
        const { show, handleClose } = this.props;
        const { startDate, startDateType } = this.state;
        return (
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Leave Request</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Start Date</Form.Label>
                            <br />
                            <DatePicker
                                selected={startDate}
                                onChange={this.handleChange}
                                dateFormat="dd/MM/yyyy"
                                customInput={<Form.Control />}
                            >
                                {this.renderDateTypeToggle()}
                            </DatePicker>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={this.onSubmit}>
                        Submit
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
