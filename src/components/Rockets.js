import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RocketList from './RocketList';
import { getRockets } from '../redux/Rockets/rockets';

export default function Rockets() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRockets());
  }, []);
  const rocketLists = useSelector((state) => state.rocketsReducer.rockets);

  return (
    <ul className="container">
      {Object.entries(rocketLists).map((data) => {
        const [key, value] = data;
        return (
          <RocketList
            key={key}
            title={value.rocket_name}
            description={value.description}
            image={value.flickr_images[0]}
            status={value.active}
          />
        );
      })}
    </ul>
  );
}
