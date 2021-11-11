import React from 'react';
import { useSelector } from 'react-redux';
import RocketList from './RocketList';

export default function Rockets() {
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
            status={value.reserved}
            id={value.id}
            image={value.flickr_images[0]}
          />
        );
      })}
    </ul>
  );
}
