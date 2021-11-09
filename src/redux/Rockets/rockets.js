const ROCKET_SUCCESS = 'ROCKET_SUCCESS';

const initialState = {
  rockets: [

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
