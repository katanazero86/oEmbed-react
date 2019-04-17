import {combineReducers} from 'redux';
import test from './testReducer';
import footerStore from './footerReducer';


// combineReducers : 분할 되어있는 리듀서 통합.
const reducers = combineReducers({
    test, footerStore
});

export default reducers;
