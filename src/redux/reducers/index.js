import {combineReducers} from 'redux';
import TaskReducer from './reducers';



export default combineReducers({
    Tasks: TaskReducer,
})