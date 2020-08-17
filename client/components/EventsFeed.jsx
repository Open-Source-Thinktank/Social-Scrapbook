import React, { useState, useEffect } from "react";
import Event from './Event.jsx';

export default function EventsFeed(props) {
  console.log('EventsFeed', props);
  let events = [];
  if (props) {
    events = props.events.map( (event, index) => {
        return <Event
         {...event}
          userUpdate={props.userUpdate}
          key={`EventsFeed${index}`}
      />
    })
  }
  return (
    <div className="events">
      {events}
    </div>
  );
}