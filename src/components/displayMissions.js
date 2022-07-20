import React from 'react';
// import { useSelector } from 'react-redux';
// import singleMission from './singleMisson';
// // import { getMissions } from '../redux/missions/missions';

// const DisplayMissions = () => {
//   const missions = useSelector((state) => state.mission);
//   console.log(missions)

//   return (
//     <div className="mission-list">
//       {missions.map((mission) => (
//         <singleMission
//         // key={mission.mission_id}
//           mission_id={mission.mission_id}
//           mission_name={mission.mission_name}
//           description={mission.description}
//         />
//       ))}
//     </div>
//   )};

// export default DisplayMissions;

import { useSelector } from 'react-redux';

const DisplayMissions = () => {
  const mission = useSelector((state) => state.mission);
  // console.log(mission);
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
              <td><button id={data.mission_id} type="submit">Join Mission</button></td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>

  );
};

export default DisplayMissions;
