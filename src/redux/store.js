import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const storeFactory = ()=>{
    //const middleware = [hunk]
    const reduxStore = createStore(reducer, composeWithDevTools())
    return reduxStore
}

export default storeFactory