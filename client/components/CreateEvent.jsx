import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function CreateEvent() {
  const [startDate, setDate] = useState(new Date())
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleDate = date => {
    setDate(date);
  };

  let month = [];
  for (let i = 1; i <= 12; i++) {
    month.push(<option key={`month${i}`} value={i}>{i}</option>);
  }

  let day = [];
  for (let i = 1; i <= 31; i++) {
    day.push(<option key={`day${i}`} value={i}>{i}</option>);
  }

  let year = [];
  for (let i = 2020; i <= 2030; i++) {
    year.push(<option key={`year${i}`} value={i}>{i}</option>);
  }

  return (
    <div>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Card className="mx-auto text-center" style={{ width: '18rem' }}>
          <div className="cardContainer">
            <FontAwesomeIcon className="mx-auto faPlus" icon={faPlus} size="8x" />
            <Card.Body>
              <Card.Title>Add Event</Card.Title>
            </Card.Body>
          </div>
        </Card>

      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Event</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Event Title</Form.Label>
              <Form.Control required type="text" placeholder="Enter title" />
            </Form.Group>

            <Form.Group controlId="formEventDescription">
              <Form.Label>Event Description</Form.Label>
              <Form.Control required as="textarea" placeholder="Enter description" />
            </Form.Group>

            <DatePicker
              selected={startDate}
              onChange={handleDate}
            />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}