import todoReducers from './todoReducer';
import signupReducers from './signupReducer';
import addReducer from './addReducer';

import {combineReducers} from 'redux'
import userReducer from './reducers';

const rootReducer =  combineReducers({
    todoReducers : todoReducers,
    signupReducers : signupReducers,
    addReducer: addReducer,
    users : userReducer
})


export default rootReducer;