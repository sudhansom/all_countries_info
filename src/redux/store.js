import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const storeFactory = ()=>{
    const middleware = [thunk]
    const reduxStore = createStore(reducer, composeWithDevTools(applyMiddleware(...middleware)))
    return reduxStore
}

export default storeFactory