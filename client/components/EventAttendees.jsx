import React, { useState, useEffect } from "react";
import {Image, Col} from 'react-bootstrap';

export default function EventAttendees({attendees}) {

  let attendeesList = [];
  if (attendees) {
    attendeesList = attendees.map( attendee => {
    return (
        <Col xs={2} md={2}>
          <Image src={`${attendee.profilePicture}`} roundedCircle fluid/>
        </Col>
      )
    });
  }

  return (
    // <div className="attendees">
    <>
      { attendeesList }
    </>
    // div
  );
}