//import useCountries from "../custom-hooks/useCountries"

export const insertCountryToCart = (country)=>{
    return{
        type:"INSERT_COUNTRY",
        payload: country,
    }
}    

export const removeCountry = countryName => {
    return {
        type:'REMOVE_COUNTRY',
        payload: countryName,
    }
}

export const selectTheme = theme =>{
    return{
        type:'SELECT_THEME',
        payload: theme,
    }
}
export const sortTheCountries = sortBy =>{
    return{
        type:'SORT',
        payload: sortBy,
    }
}


export const getAllCountries = ()=>{
    return async (dispatch, getState)=>{
        try{
            const data = await fetch("https://restcountries.eu/rest/v2/all").then(response=>response.json())
            dispatch(getSuccessContries(data))
        }catch(error){
            dispatch(sendError(error))
        }
        
    }
}
export const getOneCountry = (countryName)=>{
    return async (dispatch, getState)=>{
        try{
            const data = await fetch(`https://restcountries.eu/rest/v2/name/${countryName}`).then(response=>response.json())
            dispatch(getSuccessContry(data))
        }catch(error){
            dispatch(sendError(error))
        }
        
    }
}
export const getSuccessContries = (data)=>{
    return {
        type: "SUCCESS_COUNTRIES",
        payload: data,
    }
}

export const getSuccessContry = (data)=>{
    return {
        type: "SUCCESS_COUNTRY",
        payload: data,
    }
}

export const sendError = error =>{
    return {
        type: "FOUND_ERROR",
        payload: error,
    }
}

export const filterSearchCountries = (filteredCountries, text)=>{
    return {
        type:"FILTER_COUNTRIES",
        payload: filteredCountries,
        active: text?true:false,
    }
}

export const alreadyAddedDisable = ()=>{
    return async (dispatch, getState)=>{
        setTimeout(()=>{
            dispatch(disableAlert())
            console.log('jpt')
        }, 100)
    }
}

export const disableAlert = ()=>{
    console.log("now only...")
    return {
        type: "ALREADY_ADDED",
    }
}
