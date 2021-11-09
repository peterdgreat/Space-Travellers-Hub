import React from 'react';
import PropTypes from 'prop-types';

export default function RocketList(props) {
  const {
    title,
    description,
    image,
  } = props;

  return (
    <li>
      <div className="rocket-list-item">
        <div className="rocket-list-item-image">
          <img src={image} alt={title} />
        </div>
        <div className="rocket-list-item-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </li>
  );
}
RocketList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
