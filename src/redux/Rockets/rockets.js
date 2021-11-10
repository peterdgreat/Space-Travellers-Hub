import axios from 'axios';

const ROCKET_SUCCESS = 'ROCKET_SUCCESS';

const initialState = {
  rockets: [

  ],
};

export const getRockets = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  dispatch({
    type: ROCKET_SUCCESS,
    payload: response.data,
  });
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
