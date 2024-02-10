import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useRouter } from 'next/router';
import TripDetailsActivityCard from '../../components/TripDetailsActivityCard';
import { getTripActivities } from '../../api/activityData';
import { getSingleTrip } from '../../api/tripsData';
import TripDetailsAddActivityCard from '../../components/TripDetailsAddActivityCard';

export default function TripDetails() {
  const [trip, setTrip] = useState({});
  const [tripActivity, setTripActivity] = useState([]);
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
              <p>{`${trip.start_date} - ${trip.end_date}`}</p>
            </Col>
          </div>
        </Row>

        <Row>
          <h3>Activities</h3>
        </Row>

        <h2>Available Activities</h2>
        <Row>
          {tripActivity.map((activity) => (
            activity.planned === false
              ? (
                <TripDetailsAddActivityCard
                  key={`${activity.id}-unplanned`}
                  activity={activity}
                  trip={Number(tripId)}
                  onUpdate={fetchActivities}
                />
              )
              : null
          ))}
        </Row>
        <h2>Planned Activities</h2>
        <Row>
          {tripActivity.map((activity) => (
            activity.planned === true
              ? (
                <TripDetailsActivityCard
                  key={`${activity.id}-planned`}
                  activity={activity}
                  trip={Number(tripId)}
                  onUpdate={fetchActivities}
                />
              )
              : null
          ))}
        </Row>
      </Container>
    </>
  );
}
