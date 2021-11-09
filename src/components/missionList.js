import PropTypes from 'prop-types';

const MissionsList = (props) => {
  const {
    mission, description, status,
  } = props;
  const message = (st) => {
    if (st) return 'Active Member';
    return 'NOT MEMBER';
  };
  return (
    <tr>
      <th>{mission}</th>
      <td>
        {description}
      </td>
      <td>
        {message(status)}
      </td>
      <td>
        <button type="button">Join Missions</button>
      </td>
    </tr>
  );
};

export default MissionsList;

MissionsList.propTypes = {
  mission: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};
