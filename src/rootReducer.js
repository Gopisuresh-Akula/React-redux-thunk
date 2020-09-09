import { combineReducers } from 'redux';
import MovieReducer from './Movies/Reducer';
import ToggleReducer from './Toggle/Reducer';

const rootReducer = combineReducers({
    MovieReducer,
    ToggleReducer
});

export default rootReducer;
