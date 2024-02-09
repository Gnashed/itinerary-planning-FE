import React, { useEffect, useState } from 'react';
import TripCard from '../components/TripCard';
import { getUserTrips } from '../api/tripsData';

export default function MyTrips() {
  const [userTrips, setUserTrips] = useState([]);

  const getAllUserTrips = () => {
    getUserTrips().then(setUserTrips);
  };
  useEffect(() => {
    getAllUserTrips();
  }, []);

  return (
    <>
      <h1>User Trips</h1>
      {userTrips.map((trip) => (
        <TripCard key={trip} tripObj={trip} onUpdate={getAllUserTrips} />
      ))}
    </>
  );
}
