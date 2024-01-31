// import { Button } from 'react-bootstrap';
// import { signOut } from '../utils/auth';
import { useAuth } from '../utils/context/authContext';
import LoginPage from '../components/LoginPage';
// import TripDetails from '../components/TripDetails';
// import Signin from '../components/Signin';

function Home() {
  const { user } = useAuth();
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      style={{
        height: '90vh',
        padding: '30px',
        maxWidth: '400px',
        margin: '0 auto',
      }}
    >
      {/* <h1>Hello {user.fbUser.displayName}! </h1>
      <p>Your Bio: {user.bio}</p>
      <p>Click the button below to logout!</p>
      <Button variant="danger" type="button" size="lg" className="copy-btn" onClick={signOut}>
        Sign Out
      </Button> */}

      {/* Delete below components. Only for testing */}

      <LoginPage />
      {/* <TripDetails /> */}

    </div>
  );
}

export default Home;
