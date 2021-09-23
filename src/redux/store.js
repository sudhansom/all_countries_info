import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from '../redux/Reducers/combineReducer';

const storeFactory = ()=>{
    const middleware = [thunk]
    const reduxStore = createStore(allReducers, composeWithDevTools(applyMiddleware(...middleware)))
    return reduxStore
}

export default storeFactory