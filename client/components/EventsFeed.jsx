import React, { useState, useEffect } from "react";
import Event from './Event.jsx';

export default function EventsFeed(props) {
  console.log('EventsFeed', props);
  let events = [];
  if (props) {
    events = props.events.map( (event) => {
        return <Event
         {...event}
          userUpdate={props.userUpdate}
      />
    })
  }
  return (
    <div className="events">
      {events}
    </div>
  );
}