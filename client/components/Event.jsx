import React, { useState, useEffect } from "react";
import EventAttendees from './EventAttendees.jsx';
import Content from './Content.jsx';
import { ListGroup, Container, Row, Jumbotron } from 'react-bootstrap';

export default function Event(props) {
  console.log('Event', props);

  // date: '08/15/2020',
  //   time: '02:46 PM EST',
  //     location: 'nowhere',
  //       description: 'Enter a meaningful description here',

  return (
    <div className="event">
      <Container>
      <Jumbotron fluid>
        <Container>
          <h1>{props.title}</h1>
          <h4>{props.date} - {props.time}</h4>
          <h4>Location: {props.location}</h4>
          <p>{props.description}</p>       
        </Container>
      </Jumbotron>

      <Container>
        <Row>
            <EventAttendees 
            {...props}
              userUpdate={props.userUpdate}
             />
        </Row>
      </Container>
      <Content {...props} />
      </Container>
    </div>
  );
}