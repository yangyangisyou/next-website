import { combineReducers } from 'redux';
import firebase from './firebase';
import user from './user';

const allReducers = combineReducers({
  firebase,
  user,
});

export default allReducers;
