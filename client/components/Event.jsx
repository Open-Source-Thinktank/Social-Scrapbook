import React, { useState, useEffect } from "react";
import EventAttendees from './EventAttendees.jsx';
import Content from './Content.jsx';
import { ListGroup, Container, Row, Jumbotron } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'

export default function Event(props) {
  console.log('Event ', props);
  return (
    <>
    <b className="hr anim"></b>
    <div className="event">
      <Container>
        <Jumbotron fluid>
          <Container className='eventJumbotron'>
            <h1>{props.eventtitle}</h1>
            <h4>{props.eventdate} - {props.starttime}</h4>
            <h4>Location <FontAwesomeIcon icon={faLocationArrow} size="1x" /> : {props.eventlocation}</h4>
            <p>{props.eventdetails}</p>       
          </Container>
        </Jumbotron>

        <Container>
          <EventAttendees 
          {...props}
            userUpdate={props.userUpdate}
            />
        </Container>
        <Content {...props} />
      </Container>
    </div>
    </>
  );
}