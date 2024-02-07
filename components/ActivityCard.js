import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import { deleteActivity } from '../api/activityData';

export default function ActivityCard({ activityObj, onUpdate }) {
  const deleteThisActivity = () => {
    if (window.confirm(`Delete ${activityObj.name}?`)) {
      deleteActivity(activityObj.id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Body>
        <Card.Title>{activityObj.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{activityObj.length_of_time}</Card.Subtitle>
        <Card.Text>
          {activityObj.description}
        </Card.Text>
        <Link href={`/activty/edit/${activityObj.id}`} passHref>
          <Button variant="info">EDIT</Button>
        </Link>
        <Button variant="danger" onClick={deleteThisActivity} className="m-2">
          DELETE
        </Button>
      </Card.Body>
      <Card.Footer className="text-muted text-center">${activityObj.cost}</Card.Footer>

    </Card>
  );
}

ActivityCard.propTypes = {
  activityObj: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    length_of_time: PropTypes.string,
    cost: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
