import React from 'react';
// import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

// // TODO: Continue debugging.
// export default function TripCard({ tripObj }) {
//   return (
//     <Card style={{ width: '22rem' }}>
//       <Card.Header>{tripObj.name}</Card.Header>
//       <Card.Body>
//         <p>Destination: {tripObj.destination}</p>
//         <p>Transportation: {tripObj.transportation}</p>
//         <p>Start Date: {tripObj.startDate}</p>
//         <p>End Date: {tripObj.endDate}</p>
//       </Card.Body>
//       <Card.Footer>{tripObj.user}</Card.Footer>
//     </Card>
//   );
// }
// // TODO: Continue debugging
// TripCard.propTypes = {
//   tripObj: PropTypes.shape({
//     name: PropTypes.string,
//     destination: PropTypes.string,
//     transportation: PropTypes.string,
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
        <p>Destination</p>
        <p>Transportation: </p>
        <p>Start Date:</p>
        <p>End Date:</p>
      </Card.Body>
      <Card.Footer>user</Card.Footer>
    </Card>
  );
}
