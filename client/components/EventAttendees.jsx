import React, { useState, useEffect } from "react";
import {Image, Col, Row} from 'react-bootstrap';

export default function EventAttendees({attendees, userUpdate}) {

  let attendeesList = [];
  if (attendees) {
    attendeesList = attendees.map( (attendee, index) => {
    return (
      <div className="attendeeInfo" key={`EventAttendees${index}`}>
        <div className="circular"  >
          <img src={`${attendee.profilephoto}`} onClick={() => { userUpdate(attendee.username)}}/>
        </div>
        <p>{attendee.firstname} {attendee.lastname}</p>
      </div>
    )
    });
  }

  return (
    <div className="attendeesContainer">
      <h5>Attendees:</h5>
        <div className="attendees">
          { attendeesList }
        </div>
    </div>
  );
}