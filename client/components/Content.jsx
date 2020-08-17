import React, { useState, useEffect } from "react";
import {Media, Form, Button} from 'react-bootstrap';

export default function Content({ content }) {

  const [cont, setCont] = useState(content);
  const [comment, setComment] = useState("")

  let messages = [];
  if (cont) {
    messages = cont.map( (message, index) => {
      return (
        <div className="messageBox" key={`Content${index}`}>
          <div className="userMessage">
            <img src={message.profilephoto}></img>
          </div>
          <div className="message" key={`Content${index}`} >
            <p className="messageName">{message.firstname} {message.lastname}</p>
            <p className="messageText">{message.text}</p>
            <p className="messageTime">{message.time}</p>
          </div>
        </div>
      )
    });
  }

  const handleChange = (e) => {
    setComment(e.target.value)
  }

  function handleCommentSubmit (e) {
    e.preventDefault();
    const date = new Date();
    const newContent = cont.concat([{ text: comment, time: date.toTimeString()}])
    setCont(newContent)
    //clear form data
    document.getElementsByName('comment-form')[0].reset();
  }

  return (
    <div className="eventContent">
      <h4>Comments</h4>
      <div className="messages">
        { messages }
      </div>
      <Form name='comment-form'>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add a Comment:</Form.Label>
          <Form.Control as="textarea" rows="2" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e) => {handleCommentSubmit(e)}}>
          Submit
        </Button>
      </Form>
    </div>
  );
}