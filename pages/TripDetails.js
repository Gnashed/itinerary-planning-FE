import React from 'react';
import { Card } from 'react-bootstrap';

export default function TripDetails() {
  return (
    <>
      <div className="trip-details">
        <p>Destination</p>
        <p>Transportation</p>
        <p>Dates</p>
        <p>2/8/2024 - 2/15/2024</p>
      </div>

      <h3>Activities</h3>

      <Card style={{ width: '18rem', height: '18rem' }}>
        <Card.Img variant="top" src="https://www.omnihotels.com/blog/wp-content/uploads/2015/08/atlcnn-skyline-night.jpg" />
        <Card.Body>
          <Card.Title>Activity Name</Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
