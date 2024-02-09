import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';
import TripDetailsActivityCard from '../../components/TripDetailsActivityCard';
import { getTripActivities } from '../../api/activityData';
import { addActivity, getSingleTrip, removeActivity } from '../../api/tripsData';

export default function TripDetails() {
  const [tripActivity, setTripActivity] = useState([]);
  const [trip, setTrip] = useState({});
  const router = useRouter();
  const { tripId } = router.query;

  const getTrip = () => {
    getSingleTrip(tripId).then(setTrip);
  };

  const fetchActivities = () => {
    getTripActivities(tripId).then(setTripActivity);
  };

  useEffect(() => {
    getTrip();
  }, []);

  useEffect(() => {
    fetchActivities();
  }, []);

  return (
    <>
      {/* TODO: Either figure out how to get flex direction to work or come up with another way to get this to render how I want. */}
      <Container className="text-center mt-5">
        <Row>
          <div className="trip-details mb-5">
            <Col>
              <p>{trip.destination}</p>
            </Col>
            <Col>
              <p>{trip.transportation}</p>
            </Col>
            <Col>
              <p>Dates</p>
              <p>{trip.start_date} - {trip.end_date}</p>
            </Col>
          </div>
        </Row>

        <Row>
          <h3>Activities</h3>
        </Row>

        <Row>
          {tripActivity.map((activity) => (
            activity.planned
              ? (
                <TripDetailsActivityCard
                  key={`${activity.id}-planned`}
                  tripObj={activity}
                  onUpdate={fetchActivities}
                  updateFunc={addActivity(tripId, { activityId: activity.id })}
                />
              )
              : null
          ))}
        </Row>
        <Row>
          {tripActivity.map((activity) => (
            activity.planned === false
              ? (
                <TripDetailsActivityCard
                  key={`${activity.id}-unplanned`}
                  tripObj={activity}
                  onUpdate={fetchActivities}
                  updateFunc={removeActivity(tripId, { activityId: activity.id })}
                />
              )
              : null
          ))}
        </Row>
      </Container>
    </>
  );
}
