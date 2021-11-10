import React from 'react';
import { useSelector } from 'react-redux';

export default function Profile() {
  const list = useSelector((data) => data.reduceMissions.missions)
    .filter((mission) => mission.reserved === true);
  const myMissionList = [];
  Object.entries(list).forEach((mission) => {
    const [key, value] = mission;
    myMissionList.push(<tr><td key={key}>{value.mission_name}</td></tr>);
  });
  const listProject = useSelector((data) => data.rocketsReducer.rockets)
    .filter((rocket) => rocket.reserved === true);
  const projectList = [];
  Object.entries(listProject).forEach((rocket) => {
    const [key, value] = rocket;
    projectList.push(<tr><td key={key}>{value.rocket_name}</td></tr>);
  });
  return (
    <div className="d-flex flex-row justify-content-evenly">
      <table>
        <thead>
          <tr>
            <th>Joined Missions</th>
          </tr>
        </thead>
        <tbody>
          {myMissionList}
        </tbody>
      </table>
      <table>
        <thead>
          <tr>
            <th>Joined Missions</th>
          </tr>
        </thead>
        <tbody>
          {projectList}
        </tbody>
      </table>
    </div>
  );
}
