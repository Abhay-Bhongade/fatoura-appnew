import { createStore,applyMiddleware } from 'redux';
import logger from "redux-logger"
import reduxThunk from "redux-thunk"
import rootReducer from './Redux/Reducer/Index'
import thunk from 'redux-thunk';

const middelwares = [reduxThunk]

if(process.env.NODE_ENV === "development"){
    middelwares.push(logger)
}

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(...middelwares))

export default store;
