import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

export default function TripCard({ tripObj }) {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Body>
        <p>Destination: {tripObj.destination}</p>
        <p>Transportation: {tripObj.transportation}</p>
        <p>Start Date: {tripObj.start_date}</p>
        <p>End Date: {tripObj.end_date}</p>
      </Card.Body>
    </Card>
  );
}

TripCard.propTypes = {
  tripObj: PropTypes.shape({
    destination: PropTypes.string,
    transportation: PropTypes.string,
    user: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
  }).isRequired,
};
