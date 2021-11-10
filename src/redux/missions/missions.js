const MISSIONS_SUCCESS = 'MISSIONS_SUCCESS';
const ATTEND_MISSION = 'ATTEND_MISSION';
const LEAVE_MISSION = 'LEAVE_MISSION';
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
    case ATTEND_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.id) return { ...mission, reserved: true };
          return mission;
        }),
      };
    case LEAVE_MISSION:
      return {
        ...state,
        missions: state.missions.map((mission) => {
          if (mission.mission_id === action.id) return { ...mission, reserved: false };
          return mission;
        }),
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

export const attendMission = (id) => ({
  type: ATTEND_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

export default reduceMissions;
