import { combineReducers } from 'redux';
import category from './category';
import user from './user';

const allReducers = combineReducers({
  category,
  user,
});

export default allReducers;
