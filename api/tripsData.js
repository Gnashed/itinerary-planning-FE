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

const createNewTrip = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/trips`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
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

export {
  getTrips,
  createNewTrip,
  updateSingleTrip,
  deleteSingleTrip,
};
