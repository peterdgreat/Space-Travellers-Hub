import { React } from 'react';
import { useSelector } from 'react-redux';
import MissionsList from './missionList';
import '../css/missions.css';

export default function Missions() {
  const item = [];
  const list = useSelector((data) => data.reduceMissions.missions);
  Object.entries(list).forEach((mission) => {
    const [key, value] = mission;
    item.push(
      <MissionsList
        key={key}
        mission={value.mission_name}
        description={value.description}
        reserved={value.reserved}
        id={value.mission_id}
      />,
    );
  });
  return (
    <div className="mx-auto">
      <table className="table table-striped w-75 mx-auto">
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th aria-label="empty space" />
          </tr>
        </thead>
        <tbody>
          {item}
        </tbody>
      </table>
    </div>
  );
}
