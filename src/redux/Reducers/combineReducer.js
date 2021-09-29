import reducer from "./reducer";
import reducerTheme from "./reducerTheme";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    reducer,
    reducerTheme,
})
export const preloadedState = {
    reducer:{
        cart:localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
        total:localStorage.getItem('total')?Number(localStorage.getItem('total')):0,
        countries:[],
        country:{},
        err:'something wrong went on...',
        filterCountries:[],
        searchActive:false,
        alreadyAdded:false,
        colNames:localStorage.getItem('colNames')?JSON.parse(localStorage.getItem('colNames')):['flag', 'name', 'nativeName', 'region', 'population', 'select'],
    },
    reducerTheme:{
        theme: localStorage.getItem('theme')?localStorage.getItem('theme'):'#ffffff',
    }
}

export default allReducers