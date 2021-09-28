import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from '../redux/Reducers/combineReducer';
import reducer from './Reducers/reducer';
import { preloadedState } from '../redux/Reducers/combineReducer';

const storeFactory = ()=>{
    const middleware = [thunk]
    const reduxStore = createStore(allReducers,preloadedState, composeWithDevTools(applyMiddleware(...middleware)))
    return reduxStore
}


storeFactory().subscribe(()=>{
    const currentState = storeFactory().getState()
    const cart = currentState.reducer.cart
    const total = currentState.reducer.total
    const theme = currentState.reducerTheme.theme
    const colNames = currentState.reducer.colNames
    localStorage.setItem('cart',JSON.stringify(cart))
    localStorage.setItem('total',JSON.stringify(total))
    localStorage.setItem('theme',JSON.stringify(theme))
    localStorage.setItem('colNames',JSON.stringify(colNames))

    return storeFactory
})

export default storeFactory