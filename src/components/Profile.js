import React from 'react';
import { useSelector } from 'react-redux';
import '../css/profile.css';

export default function Profile() {
  const list = useSelector((data) => data.reduceMissions.missions)
    .filter((mission) => mission.reserved === true);
  const myMissionList = [];
  Object.entries(list).forEach((mission) => {
    const [key, value] = mission;
    myMissionList.push(<li key={key} className="list-group-item">{value.mission_name}</li>);
  });
  const listProject = useSelector((data) => data.rocketsReducer.rockets)
    .filter((rocket) => rocket.reserved === true);
  const projectList = [];
  Object.entries(listProject).forEach((rocket) => {
    const [key, value] = rocket;
    projectList.push(<li key={key} className="list-group-item">{value.rocket_name}</li>);
  });
  return (
    <div className="d-flex flex-row justify-content-center container">

      <section className="col-md-6 me-3">
        <h2>My Missions</h2>
        <ul className="list-group">
          {myMissionList}
        </ul>
      </section>
      <section className="col-md-6 ms-3">
        <h2> My Rockets</h2>
        <ul className="list-group">
          {projectList}
        </ul>
      </section>
    </div>
  );
}
