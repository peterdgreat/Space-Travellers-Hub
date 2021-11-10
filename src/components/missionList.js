import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { attendMission, leaveMission } from '../redux/missions/missions';

const MissionsList = (props) => {
  const {
    mission,
    description,
    reserved,
  } = props;
  const message = (st) => {
    if (st) {
      return (
        <span className="badge bg-primary">Active Member</span>
      );
    }
    return (
      <span className="badge bg-secondary">NOT A MEMBER</span>
    );
  };
  const dispatch = useDispatch();
  const joinMission = (id) => {
    dispatch(reserved ? leaveMission(id) : attendMission(id));
  };
  return (
    <tr>
      <th className="col-2">{mission}</th>
      <td className="col-6">
        {description}
      </td>
      <td className="col-2 align-middle text-center">
        {message(reserved)}
      </td>
      <td className="col-2 align-middle text-center">
        <button
          className={reserved ? 'missionButton leave' : 'missionButton'}
          type="button"
          onClick={() => joinMission(props.id)}
        >
          {reserved ? 'Leave Mission' : 'Join Mission'}
        </button>
      </td>
    </tr>
  );
};

export default MissionsList;

MissionsList.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};
