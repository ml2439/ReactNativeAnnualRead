import { combineReducers } from 'redux';
import bookReducer from './bookReducer';
import goalReducer from './goalReducer';

export default combineReducers({
    goalReducer,
    bookReducer
})