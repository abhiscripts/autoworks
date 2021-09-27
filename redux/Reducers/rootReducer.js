import {combineReducers} from 'redux';
import TodoReducer from './TodoReducer';

const AppReducer = combineReducers({TodoReducer});
export default AppReducer;
