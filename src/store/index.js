import {createStore} from 'redux';
import rootReducer from '../state';

export default function configureStore() {
  return createStore(rootReducer);
}
