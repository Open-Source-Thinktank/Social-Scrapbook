import React from 'react';
import { Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearchPlus } from '@fortawesome/free-solid-svg-icons'
import CreateEvent from './CreateEvent.jsx';

export default function AddSearchEvent() {
  return (
    <>
      <Col>
        <Card className="mx-auto text-center" style={{ width: '18rem' }}>
          <div className="cardContainer">
            <FontAwesomeIcon className="mx-auto faPlus" icon={faPlus} size="8x" />
            <Card.Body>
              <Card.Title>Add Event</Card.Title>
            </Card.Body>
          </div>
        </Card>
      </Col>
      <Col>
        <Card className="mx-auto text-center" style={{ width: '18rem' }}>
          <div className="cardContainer">
            <FontAwesomeIcon className="mx-auto faSearchPlus" icon={faSearchPlus} size="8x" />
            <Card.Body>
              <Card.Title>Search for Event</Card.Title>
            </Card.Body>
          </div>
        </Card>
      </Col>
    </>
  )
}