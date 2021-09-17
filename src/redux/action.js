import useCountries from "../custom-hooks/useCountries"

export const insertToCart = (country)=>{
    return{
        type:"INSERT_COUNTRY",
        payload: country,
    }
}    

export const remove = countryName => {
    return {
        type:'REMOVE_COUNTRY',
        payload: countryName,
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
