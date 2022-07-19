import { combineReducers, createStore, applyMiddleware } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import MissionReducer from './missions/missions';


const configureStore = combineReducers({
  missions: MissionReducer,
});

const store = createStore(configureStore, applyMiddleware(thunk));

export default store;