import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Modal, Form } from 'react-bootstrap';
import { getSingleActivity } from '../../api/activityData';

function ViewActivity() {
  const [activityDetails, setActivityDetail] = useState({});
  // const [activityReview, setActivityReview] = useState({});
  const [showModal, setShowModal] = useState(false);

  const router = useRouter();
  const { id } = router.query;

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (id) {
      getSingleActivity(id).then(setActivityDetail);
    }
  }, [id]);

  console.warn(activityDetails);

  return (
    <div style={{ textAlign: 'center', marginTop: '3rem' }}>
      <h1>{activityDetails.name}</h1>
      <h4>{activityDetails.length_of_time}</h4>
      <h4>{activityDetails.description}</h4>
      <h4>${activityDetails.cost}</h4>
      <Button className="m-2" variant="warning" onClick={handleOpenModal}>
        Add a Review
      </Button>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add a Review</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="rating">
              <Form.Label>Rating</Form.Label>
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Write your review here" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Submit Review
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewActivity;
