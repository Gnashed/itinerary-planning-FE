import React, { useEffect, useState } from 'react';
import TripCard from '../components/TripCard';
import { getTrips } from '../api/tripsData';

export default function CreateTrip() {
  const [trips, setTrips] = useState([]);

  const getAllTheTrips = () => {
    getTrips().then(setTrips);
  };
  useEffect(() => {
    getAllTheTrips();
  }, []);

  return (
    <>
      <h1>All Trips</h1>
      {trips.map((trip) => (
        <TripCard key={trip.destination} tripObj={trip} onUpdate={getAllTheTrips} />
      ))}
    </>
  );
}
