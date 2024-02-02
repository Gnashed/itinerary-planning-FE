import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <div
      className="text-center d-flex flex-column justify-content-center align-content-center"
      id="signin-bg-img"
      style={{
        height: '90vh',
        padding: '30px',
        margin: '0 auto',
        zIndex: 1,
        minHeight: '25rem',
        width: '100%',
        minWidth: '30rem',
        paddingBlock: '0 5rem',
      }}
    >
      <h1>We Put the IT in Itinerary</h1>
      <Button type="button" size="lg" className="copy-btn" onClick={signIn}>
        Get Started
      </Button>
    </div>
  );
}

export default Signin;
