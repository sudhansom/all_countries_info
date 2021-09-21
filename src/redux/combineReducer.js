import reducer from "./reducer";
import reducerTheme from "./reducerTheme";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    reducer,
    reducerTheme,
})

export default allReducers