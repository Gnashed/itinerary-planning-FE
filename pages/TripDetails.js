import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TripDetailsActivityCard from '../components/TripDetailsActivityCard';
import { getActivities } from '../api/activityData';

export default function TripDetails() {
  const [tripActivity, setTripActivity] = useState([]);

  // TODO: Work on API call. Need to retrieve activities for a specific trip.
  const fetchData = () => {
    getActivities().then(setTripActivity);
  };
  // TODO: Fix this
  useEffect(() => {
    fetchData();
  });

  return (
    <>
      {/* TODO: Either figure out how to get flex direction to work or come up with another way to get this to render how I want. */}
      <Container className="text-center">
        <Row>
          <div className="trip-details">
            <Col>
              <p>Destination</p>
            </Col>
            <Col>
              <p>Transportation</p>
            </Col>
            <Col>
              <p>Dates</p>
              <p>2/8/2024 - 2/15/2024</p>
            </Col>
          </div>
        </Row>

        <Row>
          <h3>Activities</h3>
        </Row>

        <Row>
          <Card style={{ width: '18rem', height: '18rem' }}>
            {/* <Card.Img variant="top" src="https://www.omnihotels.com/blog/wp-content/uploads/2015/08/atlcnn-skyline-night.jpg" />
            <Card.Body>
              <Card.Title>Activity Name</Card.Title>
            </Card.Body> */}
            {tripActivity.map((activity) => (
              <TripDetailsActivityCard
                key={activity.id}
                tripObj={activity}
                onUpdate={fetchData}
              />
            ))}
          </Card>
        </Row>
      </Container>
    </>
  );
}
