import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { createActivity, updateActivity } from '../../api/activityData';

const initialState = {
  name: '',
  description: '',
  length_of_time: '',
  cost: '',
};

export default function ActivityForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const router = useRouter();
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
      updateActivity(formInput).then(() => router.push(`/activity/${obj.id}`));
    } else {
      const payload = { ...formInput };
      createActivity(payload).then(() => {
        router.push('/activityMenu');
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2 className="text-white mt-5">{obj.id ? 'Update' : 'Create'} Activity</h2>

      {/* ACTIVITY NAME INPUT  */}
      <FloatingLabel controlId="floatingInput1" label="Activity Name" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter activity name"
          name="name"
          value={formInput.name}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* ACTIVITY DESCRIPTION INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Activity Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter description"
          name="description"
          value={formInput.description}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* INPUT LENGTH OF TIME  */}
      <FloatingLabel controlId="floatingInput3" label="Length of Time" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter length of time"
          name="length_of_time"
          value={formInput.length_of_time}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* INPUT COST  */}
      <FloatingLabel controlId="floatingInput4" label="Cost" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter cost"
          name="cost"
          value={formInput.cost}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* SUBMIT BUTTON  */}
      <Button variant="success" type="submit">{obj.id ? 'Update' : 'Create'} Activity</Button>
    </Form>
  );
}

ActivityForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    length_of_time: PropTypes.string,
    cost: PropTypes.string,
    id: PropTypes.string,
  }),
};

ActivityForm.defaultProps = {
  obj: initialState,
};
