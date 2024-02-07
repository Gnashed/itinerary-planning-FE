import Link from 'next/link';
import { Button } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';
// import AllTrips from '../components/AllTrips';
// import TripDetails from './TripDetails';

function Home() {
  // const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '50vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      <Link href="/newTrip" passHref>
        <Button variant="success">Create Trip</Button>
      </Link>
      <Link href="/activityMenu" passHref>
        <Button variant="warning">Activities</Button>
      </Link>
      {/* Will remove/refactor this. Just an easy way to get to the Trip Details page */}
      <Link href="/TripDetails" passHref>
        <Button variant="primary">Trip Details</Button>
      </Link>
    </div>
  );
}

export default Home;
