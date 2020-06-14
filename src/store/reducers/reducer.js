import { combineReducers } from 'redux';

import testReducer from './testReducer';
import trackReducer from './trackReducer';
import auth from './auth';
import profileInfo from './profileInfo';

export default combineReducers({
    testReducer,
    trackReducer,
    auth,
    profileInfo
})