import React, { useEffect, useState } from 'react';
import ActivityCard from '../components/ActivityCard';
import { getActivities } from '../api/activityData';

export default function Activities() {
  const [activities, setActivities] = useState([]);

  const getAllActivities = () => {
    getActivities().then(setActivities);
  };

  useEffect(() => {
    getAllActivities();
  });

  return (
    <div className="d-flex flex-wrap">
      {activities.map((activity) => (
        <ActivityCard key={activity.name} activityObj={activity} onUpdate={getAllActivities} />
      ))}
    </div>
  );
}
