import { combineReducers } from 'redux';
import FilesReducer from './reducer_files';
// import FiltersReducer from './reducer_filters';

const rootReducer = combineReducers({
    files: FilesReducer
    // filters: FiltersReducer
});

export default rootReducer;
