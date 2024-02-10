import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Modal, Form } from 'react-bootstrap';
import { getActivityReview, getSingleActivity, createActivityReview } from '../../api/activityData';
import { useAuth } from '../../utils/context/authContext';

function ViewActivity() {
  const initialState = {
    review: '',
  };

  const [activityDetails, setActivityDetail] = useState({});
  const [activityReview, setActivityReview] = useState({});
  const [formInput, setFormInput] = useState(initialState);
  const [showModal, setShowModal] = useState(false);
  const { user } = useAuth();

  const router = useRouter();
  const { id } = router.query;

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (id) {
      getSingleActivity(id).then(setActivityDetail);
      getActivityReview(id).then((response) => {
        if (response.length > 0) {
          setActivityReview(response[0]);
        }
      });
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  console.warn(activityReview);

  const handleSubmit = () => {
    createActivityReview({ ...formInput, activity: id, user: user.uid });

    router.push('/activityMenu');
  };

  console.warn(activityReview);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>{activityDetails.name}</h1>
      <h4>{activityDetails.length_of_time}</h4>
      <h4>{activityDetails.description}</h4>
      <h4>${activityDetails.cost}</h4>
      {activityReview.review ? <h4>Your review: {activityReview.review}</h4> : null}

      {!activityReview.review ? (
        <Button variant="warning" onClick={handleOpenModal}>
          Add a Review
        </Button>
      ) : null}
      <Modal style={{ marginTop: '5rem' }} show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="review">
              <Form.Label>Review</Form.Label>
              <Form.Control type="text" value={formInput.review} onChange={handleChange} as="textarea" name="review" rows={5} placeholder="Write your review here" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmit();
              handleCloseModal();
            }}
          >
            Submit Review
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewActivity;
