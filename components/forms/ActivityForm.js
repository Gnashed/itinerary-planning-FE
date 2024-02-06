import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { createActivity, updateActivity } from '../../api/activityData';

const initialState = {
  name: '',
  description: '',
  lengthOfTime: '',
  cost: '',
  planned: false,
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
      createActivity(payload).then(({ taco }) => {
        const putPayload = { id: taco };
        updateActivity(putPayload).then(() => {
          router.push('/activityMenu');
        });
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
          name="activityName"
          value={formInput.activityName}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* ACTIVITY DESCRIPTION INPUT  */}
      <FloatingLabel controlId="floatingInput2" label="Activity Description" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter description"
          name="activityDescription"
          value={formInput.activityDescription}
          onChange={handleChange}
          required
        />
      </FloatingLabel>

      {/* INPUT LENGTH OF TIME  */}
      <FloatingLabel controlId="floatingInput3" label="Length of Time" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Enter length of time"
          name="lengthOfTime"
          value={formInput.lengthOfTime}
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

      {/* TOGGLE PLANNED  */}
      <Form.Check
        className="text-white mb-3"
        type="switch"
        id="planned"
        name="planned"
        label="Planned?"
        checked={formInput.planned}
        onChange={(e) => {
          setFormInput((prevState) => ({
            ...prevState,
            planned: e.target.checked,
          }));
        }}
      />

      {/* SUBMIT BUTTON  */}
      <Button variant="success" type="submit">{obj.id ? 'Update' : 'Create'} Activity</Button>
    </Form>
  );
}

ActivityForm.propTypes = {
  obj: PropTypes.shape({
    activityName: PropTypes.string,
    activityDescription: PropTypes.string,
    lengthOfTime: PropTypes.string,
    cost: PropTypes.string,
    planned: PropTypes.bool,
    id: PropTypes.string,
  }),
};

ActivityForm.defaultProps = {
  obj: initialState,
};
