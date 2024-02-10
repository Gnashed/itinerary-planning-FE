import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { createNewTrip, updateSingleTrip } from '../../api/tripsData';
import { useAuth } from '../../utils/context/authContext';

const initialState = {
  destination: '',
  transportation: '',
  startDate: '',
  endDate: '',
};

export default function TripForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
  const { user } = useAuth();
  useEffect(() => {
    if (obj.id) setFormInput(obj);
  }, [obj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.id) {
      updateSingleTrip(formInput).then(() => router.push(`/trips/${obj.id}`));
    } else {
      const payload = { ...formInput };
      createNewTrip(user.uid, payload).then(() => {
        router.push('/trips');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-blue mt-5">Create Trip</h2>

      {/* DESTINATION INPUT  */}
      <FloatingLabel controlId="floatingInput3" label="Destination Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter destination"
          name="destination"
          value={formInput.destination}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* TRANSPORTATION METHOD INPUT  */}
      <FloatingLabel controlId="floatingInput4" label="Transportation Method" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter transportation method"
          name="transportation"
          value={formInput.transportation}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* START DATE INPUT  */}
      <FloatingLabel controlId="floatingInput5" label="Start Date" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter start date"
          name="startDate"
          value={formInput.startDate}
          onChange={handleChange}
          required
        />
      </FloatingLabel>
      {/* END DATE INPUT  */}
      <FloatingLabel controlId="floatingInput6" label="End Date" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter end date"
          name="endDate"
          value={formInput.endDate}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button variant="success" type="submit">Create Trip</Button>
    </Form>
  );
}

TripForm.propTypes = {
  obj: PropTypes.shape({
    travelerId: PropTypes.number,
    destination: PropTypes.string,
    transportation: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    id: PropTypes.string,
  }),
};

TripForm.defaultProps = {
  obj: initialState,
};
