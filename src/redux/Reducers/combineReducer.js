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
    },
    reducerTheme:{
        theme: localStorage.getItem('theme')?JSON.parse(localStorage.getItem('theme')):['#b6f1f2','#d7f4f5'],
    }
}

export default allReducers