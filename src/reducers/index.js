import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import table from './table';
import filter from './filter';

const rootReducer = combineReducers({
    routing,
    table,
    filter
});


export default rootReducer;
