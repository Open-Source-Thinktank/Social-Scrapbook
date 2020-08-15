import React, { useState, useEffect } from "react";
import Event from './Event.jsx';

export default function EventsFeed(props) {
  let events = [];
  if (props) {
    console.log('props[0]: ', props[0]);
    events = props[0].map( (event) => {
        return <Event {...event}/>
    })
    console.log(events);
  }
  return (
    <div className="events">
      {events}
    </div>
  );
}