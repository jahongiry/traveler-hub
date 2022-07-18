import { combineReducers, createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';
// import Reducer from './books/books';


const configureStore = combineReducers({
  missions: MissionReducer,
});

const store = createStore(configureStore, applyMiddleware(logger));

export default store;