import React, { useState, useEffect } from "react";
import {Media, Form, Button} from 'react-bootstrap';
export default function Content({ content }) {

/*
      content: [
        {
          text: 'awesome!! can\'t wait',
          time: '02:51 PM EST' // formatting not set in stone
        },
        {
          text: 'lets go',
          time: '01:35 PM EST'
        }
      ]
*/
  // console.log('content', content);
  let messages = [];
    if (content) {
    messages = content.map( message => {
      return (
        <div className="message">
          <p className="messageText">{message.text}</p>
          <p className="messageTime">{message.time}</p>
        </div>
      )
    });
  }

  return (
    <div className="eventContent">
      <h4>Comments:</h4>
      <div className="messages">
        { messages }
      </div>
      <Form>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add a Comment:</Form.Label>
          <Form.Control as="textarea" rows="2" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}