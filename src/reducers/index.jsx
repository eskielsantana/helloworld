import { combineReducers } from 'redux';

// Reducers List
import HomeReducer from './homeReducer.jsx';
import SearchReducer from './searchReducer.jsx';


const allReducers = combineReducers({
    HomeReducer,
    SearchReducer,
});

export default allReducers;
