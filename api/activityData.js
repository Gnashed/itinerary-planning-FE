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

export default getActivities;
