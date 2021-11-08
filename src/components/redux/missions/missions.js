const MISSIONS_SUCCESS = 'MISSIONS_SUCCESS';

const initialState = {
  missions: [],
};

const reduceMissions = (state = initialState, action) => {
  switch (action.type) {
    case MISSIONS_SUCCESS:
      return {
        ...state,
        missions: action.payload,
      };
    default:
      return state;
  }
};

export default reduceMissions;
