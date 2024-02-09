import { clientCredentials } from '../utils/client';

const getTrips = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trips`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleTrip = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trips/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const createNewTrip = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trips`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const updateSingleTrip = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trips/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const deleteSingleTrip = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trips/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const addActivity = (tripId, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trips/${tripId}/add_activity`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch(reject);
});

const removeActivity = (tripId, payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trips/${tripId}/remove_activity`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .catch(reject);
});

export {
  getTrips,
  getSingleTrip,
  createNewTrip,
  updateSingleTrip,
  deleteSingleTrip,
  addActivity,
  removeActivity,
};
