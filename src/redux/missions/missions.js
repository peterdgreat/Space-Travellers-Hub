const MISSIONS_SUCCESS = 'MISSIONS_SUCCESS';
const api = 'https://api.spacexdata.com/v3/missions';

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

export const getMissions = () => (dispatch) => {
  fetch(api)
    .then((res) => res.json())
    .then((resResponse) => dispatch({
      type: MISSIONS_SUCCESS,
      payload: resResponse,
    }));
};

export default reduceMissions;
