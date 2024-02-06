import React from 'react';
import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';

// NOTE: This is an activity card on the Trip Details page.

export default function ActivityCard({ tripObj }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="holder.js/100px180"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <Card.Title>{tripObj.destination}</Card.Title>
      </Card.ImgOverlay>
    </Card>
  );
}

// Proptypes goes here...
ActivityCard.propTypes = {
  tripObj: PropTypes.shape({
    destination: PropTypes.string,
  }).isRequired,
};
