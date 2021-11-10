import axios from 'axios';

const ROCKET_SUCCESS = 'space-travellers/rockets/ROCKET_SUCCESS';
const BOOK_ROCKET = 'space-travellers/rockets/BOOK_ROCKET';
const LEAVE_ROCKET = 'space-travellers/rockets/LEAVE_ROCKET';

const initialState = {
  rockets: [

  ],
};
const setRockets = (payload) => ({
  type: ROCKET_SUCCESS,
  payload,
});

export const bookRocket = (id) => ({
  type: BOOK_ROCKET,
  id,
});

export const leaveRocket = (id) => ({
  type: LEAVE_ROCKET,
  id,
});
export const getRockets = () => async (dispatch) => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  dispatch(setRockets(response.data));
};
const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ROCKET_SUCCESS:
      return {
        ...state,
        rockets: action.payload,
      };
    case BOOK_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.id) { return rocket; }
          return { ...rocket, reserved: true };
        }),
      };
    case LEAVE_ROCKET:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.id) { return rocket; }
          return { ...rocket, reserved: false };
        }),
      };
    default:
      return state;
  }
};

export default rocketsReducer;
