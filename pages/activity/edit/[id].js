import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleActivity } from '../../../api/activityData';
import TripForm from '../../../components/forms/TripForm';

export default function EditActivity() {
  const [editSingleActivity, setEditSingleActivity] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleActivity(id).then(setEditSingleActivity);
  }, [id]);

  return (<TripForm obj={editSingleActivity} />);
}
