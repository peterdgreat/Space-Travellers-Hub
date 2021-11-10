import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { attendMission, leaveMission } from '../redux/missions/missions';

const MissionsList = (props) => {
  const {
    mission, description, reserved,
  } = props;
  const message = (st) => {
    if (st) return 'Active Member';
    return 'NOT MEMBER';
  };
  const dispatch = useDispatch();
  const joinMission = (id) => {
    dispatch(reserved ? leaveMission(id) : attendMission(id));
  };
  return (
    <tr>
      <th>{mission}</th>
      <td>
        {description}
      </td>
      <td>
        {message(reserved)}
      </td>
      <td>
        <button type="button" onClick={() => joinMission(props.id)}>{reserved ? 'Leave Mission' : 'Join Mission'}</button>
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
