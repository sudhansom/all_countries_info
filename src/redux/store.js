import {createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import allReducers from '../redux/Reducers';
import reducerCountries from './Reducers/reducerCountries';
import { preloadedState } from '../redux/Reducers';

const storeFactory = ()=>{
    const middleware = [thunk]
    const reduxStore = createStore(allReducers,preloadedState, composeWithDevTools(applyMiddleware(...middleware)))
    return reduxStore
}


storeFactory().subscribe(()=>{
    const currentState = storeFactory().getState()
    const cart = currentState.reducerCountries.cart
    const theme = currentState.reducerTheme.theme
    const colNames = currentState.reducerCountries.colNames
    localStorage.setItem('cart',JSON.stringify(cart))
    localStorage.setItem('theme',theme)
    localStorage.setItem('colNames',JSON.stringify(colNames))

    return storeFactory
})

export default storeFactory