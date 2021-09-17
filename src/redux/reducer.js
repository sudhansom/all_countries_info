const defaultState ={
    cart: localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
    total: localStorage.getItem('total')?Number(localStorage.getItem('total')):0,
    theme: localStorage.getItem('theme')?JSON.parse(localStorage.getItem('theme')):['#b6f1f2','#d7f4f5'],
    countries:[],
    country:{},
    err:null,
    filterCountries:[],
    searchActive:false,
    alreadyAdded:false,
}

const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case 'INSERT_COUNTRY':
            const incomingName = action.payload;
            const existCountry = state.cart.find(country=>country.name===incomingName.name)
            if(existCountry){
                return {
                    ...state,
                    alreadyAdded:true,
                }
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

        case "SUCCESS_COUNTRIES":
            const result = action.payload;
            return {
                ...state,
                countries:result,
            }
        case "SUCCESS_COUNTRY":
            
            return {
                ...state,
                country:action.payload[0],
            }
        case "FOUND_ERROR":
            
            return {
                ...state,
                err:action.payload.error,
            }
        case "FILTER_COUNTRIES":
            return {
                ...state,
                filterCountries:action.payload,
                searchActive:action.active,
            }
        case "ALREADY_ADDED":
            return {
                ...state,
                alreadyAdded:false,
            }            
        default:
            return state
        
        case "SELECT_THEME":
            let temp = []
            if(action.payload==='Green'){
                 temp = ['#dbebab','#dff5ed']
            }
            else if(action.payload==='Yellow'){
                 temp = ['#f2ee96','#f5f0d3']
            }
            else if(action.payload==='Red'){
                 temp = ['#f7a1a7','#f2d5d7']
            }

            return{
                ...state,
                theme:temp,
            }
    }
    
}
export default reducer