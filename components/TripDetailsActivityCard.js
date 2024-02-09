import React from 'react';
import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';

// NOTE: This is an activity card on the Trip Details page.

export default function TripDetailsActivityCard({ tripObj, updateFunc }) {
  return (
    <Card className="bg-dark text-white mt-5 mb-2" style={{ width: '20rem' }}>
      <Card.Img
        src="https://www.omnihotels.com/blog/wp-content/uploads/2015/08/atlcnn-skyline-night.jpg"
        alt="Card image"
        style={{ width: '20rem' }}
      />
      <Card.ImgOverlay>
        <p style={{ color: 'whitesmoke' }}>{tripObj.name}</p>
      </Card.ImgOverlay>
      <>
        {
          tripObj.planned ? <Button onClick={updateFunc}>Remove Activity</Button> : <Button onClick={updateFunc}>Add Activity</Button>
        }
      </>
    </Card>
  );
}

// Proptypes goes here...
TripDetailsActivityCard.propTypes = {
  tripObj: PropTypes.shape({
    name: PropTypes.string,
    planned: PropTypes.bool,
  }).isRequired,
  updateFunc: PropTypes.func.isRequired,
};
