import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension"
import { logger } from "redux-logger"
import reducer from './reducer';

const initialState = {
  player: '',
  gender: '',
  score: 0,
  error: '',
  car: {},
  team: {},
  status: {},
  wheel_tasks: false,
  mechanic: '',
  position: '',
  loading: false,
  legal: false,
};

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(logger)));

export default store;
