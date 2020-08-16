import React, { useState, useEffect } from "react";
import Profile from './Profile.jsx';
import EventsFeed from './EventsFeed.jsx';
import Notnav from './Navbar.jsx';
import axios from 'axios';
import { Card, Button, Col, Row, Container} from 'react-bootstrap';
import AddSearchEvent from './AddSearchEvent.jsx';


export default function MainContainer() {
  const [user, setUser] = useState({
      userName: 'marc',
      firstName: 'Marc',
      lastName: 'Burnie',
      location: 'somewhere',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pug_portrait.jpg/1599px-Pug_portrait.jpg'
    });
  const [events, setEvents] = useState([
    {
      title: 'Awesome Event',
      eventOwner: {
        userName: 'marc',
        firstName: 'Marc',
        lastName: 'Burnie',
        profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pug_portrait.jpg/1599px-Pug_portrait.jpg'
      },
      date: '08/15/2020',
      time: '02:46 PM EST',
      location: 'nowhere',
      description: 'Enter a meaningful description here',
      attendees: [
        {
          userName: 'user1',
          profilePicture: 'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg'
        },
        {
          userName: 'user2',
          profilePicture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg'
        },
      ],
      content: [
        {
          text: 'awesome!! can\'t wait',
          time: '02:51 PM EST' // formatting not set in stone
        },
        {
          text: 'lets go',
          time: '01:35 PM EST'
        }
      ]
    },
    {
      title: 'I Need Sleep',
      description: 'please',
      attendees: [
        {
          userName: 'user3',
          profilePicture: 'https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg'
        },
        {
          userName: 'user4',
          profilePicture: 'https://thedogtale.com/wp-content/uploads/2019/09/Yorkie-Weight-Chart_How-Big-Will-My-Yorkie-Get.jpg'
        },
      ]
    }
  ]);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    axios.get(`/info?userName=${userName}`)
      .then((res) => {
        console.log('res: ', res);
        /*
          setEvents(res.events);
          setUser(res.user);
        */
      })
  });

  function handleUserPageChange(userName) {
    console.log('userName:', userName)
    setUserName(userName);
  }

  function handleCreateEvent(event) {
    event.attendees = [
      {
        userName: user.userName,
        profilePicture: user.profilePicture
      }
    ]
    event.content = [];
    const newEvents = [event].concat(events);
    console.log("updated events:", newEvents);
    setEvents(newEvents);
  }

  function handleSearchEvent(event) {
    event.attendees.push(
      {
        userName: user.userName,
        profilePicture: user.profilePicture
      });
    const newEvents = [event].concat(events);
    console.log("updated events:", newEvents);
    setEvents(newEvents);
  }
    
  return (
    <div className="container">
      <Notnav />
      <Container className="justify-space-between header">
      <Row>
        <Col>
          <Profile {...user}/>
        </Col>
          <AddSearchEvent addEvent={handleCreateEvent} searchEvent={handleSearchEvent} events={events}/>
      </Row>
      </Container>
      <EventsFeed 
        events={events}
        userUpdate={handleUserPageChange}
      />
    </div>
  );
}