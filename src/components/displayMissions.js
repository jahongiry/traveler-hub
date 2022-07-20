import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { missionActions } from '../redux/missions/missions';

const DisplayMissions = () => {
  const mission = useSelector((state) => state.mission);
  console.log(mission);
  const dispatch = useDispatch();

  const handleChange = ({ target }) => {
    const { id } = target;
    dispatch(missionActions.JoinButtonAction([mission, id]));
  };

  const cancelJoining = ({ target }) => {
    const { id } = target;
    dispatch(missionActions.CancelButtonAction([mission, id]));
  };

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
              {!data.reserved && (<td className="mission-name">{data.mission_name}</td>)}
              {data.reserved && (
              <td className="mission-name">
                {data.mission_name}
                <span className="reserved-flag">&nbsp;&nbsp;Reserved!</span>
              </td>
              )}
              <td>{data.description}</td>
              {data.reserved && (<td><button id={data.mission_id} type="submit">ACTIVE MEMBER</button></td>)}
              {!data.reserved && (<td><button id={data.mission_id} type="submit">NOT A MEMBER</button></td>)}
              {data.reserved && (<td><button onClick={cancelJoining} id={data.mission_id} type="submit">LEAVE MISSION</button></td>)}
              {!data.reserved && (<td><button onClick={handleChange} id={data.mission_id} type="submit">JOIN MISSION</button></td>)}
            </tr>
          ))}
        </tbody>
      </table>

    </div>

  );
};

export default DisplayMissions;
