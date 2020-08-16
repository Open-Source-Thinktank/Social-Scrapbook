import React from 'react';
import { Col, Card } from 'react-bootstrap';
import CreateEvent from './CreateEvent.jsx';
import SearchEvent from './SearchEvent.jsx';
export default function AddSearchEvent(props) {
  return (
    <>
      <Col>
        <CreateEvent {...props}/>
      </Col>
      <Col>
        <SearchEvent {...props}/>
      </Col>
    </>
  )
}