import React, { useState, useEffect } from "react";
import Profile from './Profile.jsx';
import EventsFeed from './EventsFeed.jsx';
import Notnav from './Navbar.jsx';
import axios from 'axios';
import { Card, Button, Col, Row, Container} from 'react-bootstrap';
import AddSearchEvent from './AddSearchEvent.jsx';

/*
{
      userName: 'marc',
      firstName: 'Marc',
      lastName: 'Burnie',
      location: 'somewhere',
      profilePicture: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Pug_portrait.jpg/1599px-Pug_portrait.jpg'
    }
*/

/*
[
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
          firstName: 'Jen',
          lastName: 'Song',
          profilePicture: 'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg'
        },
        {
          userName: 'user2',
          firstName: 'Minchan',
          lastName: 'Jun',
          profilePicture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg'
        },
      ],
      content: [
        {
          userName: 'user1',
          firstName: 'Jen',
          lastName: 'Song',
          profilePicture: 'https://www.thesprucepets.com/thmb/sfuyyLvyUx636_Oq3Fw5_mt-PIc=/3760x2820/smart/filters:no_upscale()/adorable-white-pomeranian-puppy-spitz-921029690-5c8be25d46e0fb000172effe.jpg',
          text: 'awesome!! can\'t wait',
          time: '02:51 PM EST' // formatting not set in stone
        },
        {
          userName: 'user2',
          firstName: 'Minchan',
          lastName: 'Jun',
          profilePicture: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg',
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
          firstName: 'Bon-Jay',
          lastName: '123',
          profilePicture: 'https://images.theconversation.com/files/319375/original/file-20200309-118956-1cqvm6j.jpg'
        },
        {
          userName: 'user4',
          firstName: 'Stella',
          lastName: 'Song',
          profilePicture: 'https://thedogtale.com/wp-content/uploads/2019/09/Yorkie-Weight-Chart_How-Big-Will-My-Yorkie-Get.jpg'
        },
      ]
    }
  ]
*/

export default function MainContainer() {

  const [userName, setUserName] = useState("");
  const [user, setUser] = useState({});
  const [events, setEvents] = useState([]);
    
  useEffect(() => {
    axios.get(`/api/info?userName=${userName}`)
    .then((res) => {
      console.log(res.data);
      let userInfo = {
        username: res.data.users.username,
        firstname: res.data.users.firstname,
        lastname: res.data.users.lastname,
        profilephoto: res.data.users.profilephoto,
      }
      let eventsInfo = res.data.events;
      setUser(userInfo);
      setEvents(eventsInfo);
      setUserName(res.data.users.username);
    })
  }, []);

  function handleUserPageChange(username) {
    console.log('username:', username)
    setUserName(username);
  }

  function handleCreateEvent(event) {
    let { eventtitle, eventlocation, eventdate, eventstarttime, eventdetails} = event;
    axios.post(`/api/create?userName=${userName}`, { eventtitle, eventlocation, eventdate, eventstarttime, eventdetails})
    .then((res) => {
      console.log(res.data);
      // let userInfo = {
      //   userName: res.data.users.username,
      //   firstName: res.data.users.firstname,
      //   lastName: res.data.users.lastname,
      //   profilePicture: res.data.users.profilephoto,
      // }
      // let eventsInfo = res.data.events;
      // setUser(userInfo);
      // setEvents(eventsInfo);
    })
    event.attendees = [{
      username: user.username,
      profilephoto: user.profilephoto
    }];
    const newEvents = [event].concat(events);
    console.log("updated events:", newEvents);
    setEvents(newEvents);
  }

  function handleSearchEvent(event) {
    console.log("Main Container:", event)
    // ADD
    axios.post(`/api/add?eventtitle=${event.eventtitle}`)
    .then((res) => {
      console.log(res.data);
      event.attendees.push(
      {
        username: user.username,
        firstname: user.firstname,
        lastname: user.lastname,
        profilephoto: user.profilephoto
      });
      const newEvents = [event].concat(events);
      console.log("updated events:", newEvents);
      setEvents(newEvents);
    })
    // END ADD
    // event.attendees.push(
    //   {
    //     username: user.username,
    //     profilephoto: user.profilephoto
    //   });
    // const newEvents = [event].concat(events);
    // console.log("updated events:", newEvents);
    // setEvents(newEvents);
  }
    
  return (
    <div className="myContainer">
      <Notnav />
      <div className="container">
        <Container className="header">
          <Profile {...user}/>
          <AddSearchEvent addEvent={handleCreateEvent} searchEvent={handleSearchEvent} events={events}/>
        </Container>
        <EventsFeed 
          events={events}
          userUpdate={handleUserPageChange}
        />
      </div>
    </div>
  );
}