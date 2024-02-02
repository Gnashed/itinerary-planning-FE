import React from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

// TODO: Continue debugging.
// export default function TripCard({ name, destination, user, startDate, endDate }) {
//   return (
//     <Card style={{ width: '22rem' }}>
//       <Card.Header>{name}</Card.Header>
//       <Card.Body>
//         <p>{destination}</p>
//         <p>Start Date:</p>
//         <p>End Date:</p>
//       </Card.Body>
//       <Card.Footer>{user}</Card.Footer>
//     </Card>
//   );
// }
// // TODO: Continue debugging
// TripCard.propTypes = {
//   tripObj: PropTypes.shape({
//     name: PropTypes.string,
//     destination: PropTypes.string,
//     user: PropTypes.string,
//     startDate: PropTypes.string,
//     endDate: PropTypes.string,
//   }).isRequired,
// };

export default function TripCard() {
  return (
    <Card style={{ width: '22rem' }}>
      <Card.Header>name</Card.Header>
      <Card.Body>
        <p>destination</p>
        <p>Start Date:</p>
        <p>End Date:</p>
      </Card.Body>
      <Card.Footer>user</Card.Footer>
    </Card>
  );
}
