import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import DateTimePicker from 'react-datetime-picker';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import { Modal, Button, Form, Card } from 'react-bootstrap';
import axios from 'axios';

export default function SearchEvent({ searchEvent, events }) {
  /* Form data */
  const initialFormData = Object.freeze({
    title: "",
    description: ""
  });

  const [formData, updateFormData] = React.useState(initialFormData);
  const [results, updateResults] = useState([]);
  const [show, setShow] = useState(false);

  let exampleEventData;

  // const exampleEventData = [
  //   {
  //     title: 'Awesome Event',
  //     eventOwner: {
  //       userName: 'marc',
  //       firstName: 'Marc',
  //       lastName: 'Burnie',
  //       profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pug_portrait.jpg/1599px-Pug_portrait.jpg'
  //     },
  //     date: '08/15/2020',
  //     time: '02:46 PM EST',
  //     location: 'nowhere',
  //     description: 'Enter a meaningful description here',
  //     attendees: [
  //       {
  //         userName: 'user1',
  //         profilePicture: 'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg'
  //       },
  //       {
  //         userName: 'user2',
  //         profilePicture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg'
  //       },
  //     ],
  //     content: [
  //       {
  //         text: 'awesome!! can\'t wait',
  //         time: '02:51 PM EST' // formatting not set in stone
  //       },
  //       {
  //         text: 'lets go',
  //         time: '01:35 PM EST'
  //       }
  //     ]
  //   },
  //   {
  //     title: 'I Need Some Sleep',
  //     description: 'please',
  //     attendees: [
  //       {
  //         userName: 'user3',
  //         profilePicture: 'https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg'
  //       },
  //       {
  //         userName: 'user4',
  //         profilePicture: 'https://thedogtale.com/wp-content/uploads/2019/09/Yorkie-Weight-Chart_How-Big-Will-My-Yorkie-Get.jpg'
  //       },
  //     ]
  //   }
  // ];

  useEffect(() => {
    axios.get('/api/events')
    .then(res => {
      exampleEventData = res.data;
    })
  });

  const handleChange = (e) => {
    const regex = new RegExp(e.target.value.trim(), "gi");
    const eventTitles = events.map(event => event.eventtitle)
    updateResults(exampleEventData.filter((event) => event.eventtitle.match(regex) && !eventTitles.includes(event.eventtitle)))
  };

  const handleSubmit = (e, event) => {
    e.preventDefault()
    searchEvent(event)
    handleClose();
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //generates a list of events on load using fetch
  const btnResults = results.map(event => {
    return (
      <Button className="searchResult" variant="primary" type="submit" onClick={(e) => { handleSubmit(e, event) }}>{event.eventtitle}</Button>
    );
  })



  return (
    <div>

      {/* <Card className="mx-auto text-center" style={{ width: '18rem' }}>
        <div className="cardContainer" onClick={handleShow}>
          <FontAwesomeIcon className="mx-auto faSearchPlus" icon={faSearchPlus} size="8x" />
          <Card.Body>
            <Card.Title>Search for Event</Card.Title>
          </Card.Body>
        </div>
      </Card> */}

      <div className='cardContainer' onClick={handleShow}>
        <FontAwesomeIcon className="mx-auto faSearchPlus" icon={faSearchPlus} size="4x" />
        <p>Search Events</p>
      </div>
      
      <Modal show={show} onHide={handleClose} animation={true}>
        <Modal.Header closeButton>
          <Modal.Title>Search for an Event</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="formEventTitle">
              <Form.Label>Please enter the event name below.</Form.Label>
              <Form.Control name='title' onChange={handleChange} required type="text" placeholder="Enter title" />
            </Form.Group>
            <div className='searchResults'>
            {btnResults}

            </div>

          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}