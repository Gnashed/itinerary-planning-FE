import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TripDetailsActivityCard from '../components/TripDetailsActivityCard';
import { getActivities } from '../api/activityData';

export default function TripDetails() {
  const [tripActivity, setTripActivity] = useState([]);

  const fetchActivities = () => {
    getActivities().then(setTripActivity);
  };

  useEffect(() => {
    fetchActivities();
  });

  return (
    <>
      {/* TODO: Either figure out how to get flex direction to work or come up with another way to get this to render how I want. */}
      <Container className="text-center mt-5">
        <Row>
          <div className="trip-details mb-5">
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
          {tripActivity.map((activity) => (
            <TripDetailsActivityCard
              key={activity.id}
              tripObj={activity}
              onUpdate={fetchActivities}
            />
          ))}
        </Row>
      </Container>
    </>
  );
}
