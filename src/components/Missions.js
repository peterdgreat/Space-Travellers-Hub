import { React } from 'react';
import { useSelector } from 'react-redux';
import MissionsList from './missionList';

export default function Missions() {
  const item = [];
  const list = useSelector((data) => data.reduceMissions.missions);
  Object.entries(list).forEach((book) => {
    const [key, value] = book;
    item.push(
      <MissionsList
        key={key}
        mission={value.mission_name}
        description={value.description}
        status={value.status}
      />,
    );
  });
  return (
    <div>
      <table className="table table-striped">
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
