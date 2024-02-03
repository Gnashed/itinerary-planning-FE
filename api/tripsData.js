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

export default getTrips;
