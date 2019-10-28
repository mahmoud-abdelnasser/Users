// @flow
import { combineReducers } from 'redux';
import  {userReducer} from './user';

export default function createRootReducer() {

  return (
    combineReducers({
        userReducer
    }))
}
