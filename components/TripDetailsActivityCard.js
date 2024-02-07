import React from 'react';
import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';

// NOTE: This is an activity card on the Trip Details page.

export default function TripDetailsActivityCard({ tripObj }) {
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        src="https://www.omnihotels.com/blog/wp-content/uploads/2015/08/atlcnn-skyline-night.jpg"
        alt="Card image"
      />
      <Card.ImgOverlay>
        <p style={{ color: 'whitesmoke' }}>{tripObj.name}</p>
      </Card.ImgOverlay>
    </Card>
  );
}

// Proptypes goes here...
TripDetailsActivityCard.propTypes = {
  tripObj: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};