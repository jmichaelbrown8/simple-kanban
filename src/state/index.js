import {combineReducers} from 'redux';
import board from './board';
import card from './card';

const rootReducer = combineReducers({
  board,
  card,
});

export default rootReducer;
