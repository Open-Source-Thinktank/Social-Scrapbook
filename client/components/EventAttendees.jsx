import React, { useState, useEffect } from "react";
import {Image, Col, Row} from 'react-bootstrap';

export default function EventAttendees({attendees, userUpdate}) {

  let attendeesList = [];
  if (attendees) {
    attendeesList = attendees.map( attendee => {
    return (
      <div class="attendee circular">
        <img src={`${attendee.profilePicture}`} onClick={() => { userUpdate(attendee.userName)}}/>
      </div>
    )
    });
  }

  return (
    <div class="attendeesContainer">
      <h5>Attendees:</h5>
        <div class="attendees">
          { attendeesList }
        </div>
    </div>
  );
}