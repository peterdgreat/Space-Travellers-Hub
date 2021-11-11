import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reduceMissions from './missions/missions';
import rocketsReducer from './Rockets/rockets';

const reducer = combineReducers({
  reduceMissions,
  rocketsReducer,
});
const store = createStore(
  reducer,
  applyMiddleware(logger, thunk),
);
export default store;
