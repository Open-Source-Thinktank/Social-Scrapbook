import React, { useState, useEffect } from "react";
import {Image, Col, Row} from 'react-bootstrap';

export default function EventAttendees({attendees, userUpdate}) {

  let attendeesList = [];
  if (attendees) {
    attendeesList = attendees.map( (attendee, index) => {
    return (
      <div className="attendeeInfo" key={`EventAttendees${index}`}>
        <div className="circular"  >
          <img src={`${attendee.profilePicture}`} onClick={() => { userUpdate(attendee.userName)}}/>
        </div>
        <p>{attendee.firstName} {attendee.lastName}</p>
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