const defaultState ={
    cart: localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
    total: localStorage.getItem('total')?Number(localStorage.getItem('total')):0,
}

const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case 'INSERT_COUNTRY':
            const incomingName = action.payload;
            const existCountry = state.cart.find(country=>country.name===incomingName.name)
            if(existCountry){
                return state
            }
            return {
                ...state,
                cart:[...state.cart, {name:incomingName.name,flag:incomingName.flag, area:incomingName.area}],
                total:state.total + 1,
            }
            case "REMOVE_COUNTRY":
                const filteredCountries = state.cart.filter(country=>country.name!==action.payload)
                return {
                    ...state,
                    cart:filteredCountries,
                    total: state.total - 1,
                }

                    
            default:
                return state
    }
    
}
export default reducer