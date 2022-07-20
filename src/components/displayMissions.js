import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { missionActions } from '../redux/missions/missions';

const DisplayMissions = () => {
  const mission = useSelector((state) => state.mission);
  // console.log(mission);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { id } = target;
    dispatch(missionActions.JoinButtonAction([mission, id]));
  };

  const cancelJoining = ({target}) => {
    const {id} = target;
    dispatch(missionActions.CancelButtonAction([mission, id]))
  }

  return (
    <div className="missions-table">
      <table>
        <thead>
          <tr>
            <th>Mission</th>
            <th className="discription">Description</th>
            <th>Status</th>
            <th>Join</th>
          </tr>
        </thead>
        <tbody>
          {mission.map((data) => (
            <tr key={data.mission_id}>
              <td className="mission-name">{data.mission_name}</td>
              <td>{data.description}</td>
              <td><button id={data.mission_id} type="submit">Not A Member</button></td>
              <td><button onClick={handleChange} id={data.mission_id} type="submit">Join Mission</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  );
};

export default DisplayMissions;
