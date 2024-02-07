import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSingleActivity } from '../../../api/activityData';
import ActivityForm from '../../../components/forms/ActivityForm';

export default function EditActivity() {
  const [editSingleActivity, setEditSingleActivity] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleActivity(id).then(setEditSingleActivity);
  }, [id]);

  return (<ActivityForm obj={editSingleActivity} />);
}
