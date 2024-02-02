import React from 'react';
import { Card } from 'react-bootstrap';

export default function TripCard() {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Header>Name</Card.Header>
      <Card.Body>
        <p>Destination</p>
        <p>Start Date:</p>
        <p>End Date:</p>
      </Card.Body>
      <Card.Footer>User</Card.Footer>
    </Card>
  );
}
