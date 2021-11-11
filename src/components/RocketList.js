import React from 'react';
import PropTypes from 'prop-types';
import '../css/RocketList.css';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { bookRocket, leaveRocket } from '../redux/Rockets/rockets';

export default function RocketList(props) {
  const {
    title,
    description,
    image,
    status,
    id,
  } = props;
  const dispatch = useDispatch();

  const message = status === true ? 'Cancel Reservation' : 'Reserve Rocket';
  const color = status === true ? 'outlined' : 'contained';
  const reserved = status === true ? 'Reserved' : '';

  const handleReserve = () => {
    dispatch(!status ? bookRocket(id) : leaveRocket(id));
  };

  return (
    <li className="row list-unstyled my-4">
      <section className="col-md-4">
        <div className="rocket-list-item-image">
          <img src={image} className="img-fluid" alt={title} />
        </div>
      </section>
      <section className="col-md-8">
        <div className="rocket-list-item">
          <div className="rocket-list-item-content">
            <h3>{title}</h3>
            <p>
              <span className={reserved}>
                {reserved}
              </span>
              {description}
            </p>
          </div>
          <Button variant={color} onClick={handleReserve}>
            {message}
          </Button>
        </div>
      </section>
    </li>
  );
}
RocketList.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
};
