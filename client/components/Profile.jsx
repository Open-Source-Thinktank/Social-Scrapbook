import React, { useState, useEffect } from "react";
import { Card} from 'react-bootstrap';

export default function Profile(props) {
  return (
    <div className="profile">
      {/* <h4>Profile</h4> */}
      {/* <Card style={{ width: '18rem' }}> */}
        <img src={props.profilePicture} />

        <Card.Body>
          <Card.Title>{props.userName}</Card.Title>
          <Card.Text>
            Hi, my name is {props.firstName} {props.lastName}!
          </Card.Text>
        </Card.Body>
      {/* </Card> */}
    </div>
  );
}