const ROCKET_SUCCESS = 'ROCKET_SUCCESS';

const initialState = {
  rockets: [
    {
      title: 'Falcon 1',
      description: 'Falcon 1 is a partially reusable expendable launch vehicle developed and manufactured by SpaceX.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Falcon_1_Demo_Mission.jpg/220px-Falcon_1_Demo_Mission.jpg',
    },
    {
      title: 'Falcon 2',
      description: 'Falcon 1 is a partially reusable expendable launch vehicle developed and manufactured by SpaceX.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Falcon_1_Demo_Mission.jpg/220px-Falcon_1_Demo_Mission.jpg',
    },
    {
      title: 'Falcon 13',
      description: 'Falcon 1 is a partially reusable expendable launch vehicle developed and manufactured by SpaceX.',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Falcon_1_Demo_Mission.jpg/220px-Falcon_1_Demo_Mission.jpg',
    },

  ],
};

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKET_SUCCESS:
      return {
        ...state,
        rockets: action.payload,
      };
    default:
      return state;
  }
};

export default rocketsReducer;
