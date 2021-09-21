const defaultState ={
    cart: localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):[],
    total: localStorage.getItem('total')?Number(localStorage.getItem('total')):0,
    countries:[],
    country:{},
    err:'something wrong went on...',
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
        
        case "SORT":
            console.log("you are here inside reducer-sort ...")
            const sortBy = action.payload;
            let sortResult = state.countries;
            if(sortBy==='area' || sortBy==='population'){
                sortResult = state.countries.sort((a,b)=>{return(a[sortBy]-b[sortBy])})
            }else{
                sortResult =state.countries.sort((a,b)=>{return(a[sortBy].localeCompare(b[sortBy]))})
            }
            return {
            ...state,
            countries:[...sortResult],
            }
        default:
            return state
    }
    
}
export default reducer