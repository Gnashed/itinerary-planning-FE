import React, { useEffect, useState } from 'react';
import TripCard from '../components/TripCard';
import { getUserTrips } from '../api/tripsData';
import { useAuth } from '../utils/context/authContext';

export default function MyTrips() {
  const [trips, setTrips] = useState([]);
  const { user } = useAuth();

  const getAllTheTrips = () => {
    getUserTrips(user.uid).then(setTrips);
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
