import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// GET ACTIVITIES
const getActivities = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/activity`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleActivity = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/activity/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// DELETE ACTIVITY
// TODO: DELETE BOOK
const deleteActivity = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/activity/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// CREATE ACTIVITY
const createActivity = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/activity`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE ACTIVITY
const updateActivity = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/activity/${payload.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getActivities,
  getSingleActivity,
  deleteActivity,
  createActivity,
  updateActivity,
};