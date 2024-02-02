import React from 'react';
import { Card } from 'react-bootstrap';

export default function TripDetails() {
  return (
    <>
      <div>
        <p>Destination</p>
        <p>Transportation</p>
      </div>

      <div>
        <p>Start Date</p>
        <p>End Date</p>
      </div>

      <h3>Activities</h3>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Activity</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
