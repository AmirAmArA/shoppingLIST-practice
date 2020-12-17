//@Root Reducer

import {combineReducers} from 'redux';
import itemReducer from './itemReducer';

export default combineReducers({
  item: itemReducer,
   
});