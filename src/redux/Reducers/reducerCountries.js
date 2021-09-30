const defaultState ={
    cart:[],
    countries:[],
    country:{},
    err:'something wrong went on...',
    filterCountries:[],
    searchActive:false,
    alreadyAdded:false,
    colNames:['flag', 'name', 'nativeName', 'region', 'population', 'select'],
}

const reducer = (state=defaultState, action)=>{
    switch(action.type){
        case 'INSERT_COUNTRY':
            return {
                ...state,
                cart:[...action.payload['toCart'] ],
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
                filterCountries:action.payload['filteredCountries'],
                searchActive:action.payload['active'],
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
        case "SAVE_KEYS":
            const newColNames = action.payload
            return{
                ...state,
                colNames:newColNames,
            }
        default:
            return state
    }
    
}
export default reducer