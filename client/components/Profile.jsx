import React, { useState, useEffect } from "react";
import { Card} from 'react-bootstrap';

export default function Profile(props) {
  return (
    <div className="profile">
      {/* <h4>Profile</h4> */}
      {/* <Card style={{ width: '18rem' }}> */}
        <img src={props.profilephoto} />

        <Card.Body>
          <Card.Title>{props.username}</Card.Title>
          <Card.Text>
            Hi, my name is {props.firstname} {props.lastname}!
          </Card.Text>
        </Card.Body>
      {/* </Card> */}
    </div>
  );
}