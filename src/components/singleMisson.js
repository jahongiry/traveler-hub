import React from 'react';
// import { useDispatch } from "react-redux/es/exports";

const singleMission = ({ mission_id, mission_name, description }) => (
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
        <tr>
          <td className="mission-name">{mission_name}</td>
          <td>{description}</td>
          <td><button id={mission_id} type="submit">Not A Member</button></td>
          <td><button id={mission_id} type="submit">Join Mission</button></td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default singleMission;
