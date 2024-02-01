import React, { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';

const initialState = {
  tripName: '',
  travelerName: '',
  destination: '',
  transportation: '',
  startDate: '',
  endDate: '',
};

export default function TripForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  // const router = useRouter();
  useEffect(() => {
    if (obj) setFormInput(obj);
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
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-blue mt-5">Create Trip</h2>

      {/* TRIP NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Trip Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter trip name"
          name="tripName"
          value={formInput.tripName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* TRAVELER NAME INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Traveler Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter traveler name"
          name="travelerName"
          value={formInput.travelerName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

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
          name="transportationMethod"
          value={formInput.transportationMethod}
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
      <Button variant="success" type="submit">Create Member</Button>
    </Form>
  );
}

TripForm.propTypes = {
  obj: PropTypes.shape({
    tripName: PropTypes.string,
    travelerName: PropTypes.string,
    destination: PropTypes.string,
    transportation: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
  }),
};

TripForm.defaultProps = {
  obj: initialState,
};