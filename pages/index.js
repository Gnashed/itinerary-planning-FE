import Link from 'next/link';
import { Button } from 'react-bootstrap';
// import { useAuth } from '../utils/context/authContext';

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
    </div>
  );
}

export default Home;
