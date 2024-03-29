import React from 'react';
import Card from 'react-bootstrap/Card';
import { PropTypes } from 'prop-types';
import { Button } from 'react-bootstrap';
import { removeActivity } from '../api/tripsData';

// NOTE: This is an activity card on the Trip Details page.

export default function TripDetailsActivityCard({ activity, trip, onUpdate }) {
  const activityObj = { activityId: activity.id };
  const removeFromTrip = () => {
    removeActivity(trip, activityObj).then(() => {
      onUpdate();
    });
  };

  return (
    <Card className="bg-dark text-white mt-5 mb-2" style={{ width: '20rem' }}>
      <Card.Title>{activity.name}</Card.Title>
      <Card.Img
        src="https://www.omnihotels.com/blog/wp-content/uploads/2015/08/atlcnn-skyline-night.jpg"
        alt="Card image"
        style={{ width: '20rem' }}
      />
      <Card.Footer>
        <Button key={`${activity.id}-remove`} onClick={removeFromTrip}>Remove Activity</Button>
      </Card.Footer>
    </Card>
  );
}

// Proptypes goes here...
TripDetailsActivityCard.propTypes = {
  activity: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    planned: PropTypes.bool,
  }).isRequired,
  trip: PropTypes.number.isRequired,
  onUpdate: PropTypes.func.isRequired,
};
