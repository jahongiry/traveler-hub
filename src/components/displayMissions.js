import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import AddBook from './form';
// import SingleBook from './singleBook';
import singleMission from './singleMisson';
import { getMissions } from '../redux/missions/missions';

const DisplayMissions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMissions(missions));
  }, [dispatch]);

  return (
    <div className="mission-list">
      {missions.map((mission) => (
        <singleMission
          mission_id={mission.mission_id}
          mission_name={mission.mission_name}
          description={mission.description}
        />
      ))}
    </div>
  );
};

export default DisplayMissions;