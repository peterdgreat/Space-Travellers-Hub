import React from 'react';
import { useSelector } from 'react-redux';
import RocketList from './RocketList';

export default function Rockets() {
  const rocketLists = useSelector((state) => state.rocketsReducer.rockets);

  return (
    <div>
      <ul>
        {Object.entries(rocketLists).map((data) => {
          const [key, value] = data;
          return (
            <RocketList
              key={key}
              title={value.title}
              description={value.description}
              image={value.image}
            />
          );
        })}
      </ul>
    </div>
  );
}
