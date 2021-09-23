//import useCountries from "../custom-hooks/useCountries"

export const insertCountryToCart = (country, updateCart, currentTotal)=>{
    return{
        type:"INSERT_COUNTRY",
        payload: {
            country: country,
            toCart:updateCart,
            currentTotal: currentTotal
        }
    }
} 
export const saveCountryToCart = (country)=>{
    return (dispatch, getState)=>{
        const currentCart=localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')):getState().reducer.cart;
        let currentTotal = localStorage.getItem('total')?Number(localStorage.getItem('total')):getState().reducer.total;
            currentTotal += 1;
        localStorage.setItem('cart', JSON.stringify(currentCart))
        localStorage.setItem('total', Number(currentTotal))
        
        dispatch(insertCountryToCart(country, currentCart, currentTotal))
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
            const data = await fetch("https://restcountries-v2.herokuapp.com/all").then(response=>response.json())
            dispatch(getSuccessContries(data))
        }catch(error){
            dispatch(sendError(error))
        }
        
    }
}
export const getOneCountry = (countryName)=>{
    return async (dispatch, getState)=>{
        try{
            const data = await fetch(`https://restcountries-v2.herokuapp.com/country/{name} .com/v3/name/{name}`).then(response=>response.json())
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
        payload: {
            filteredCountries:filteredCountries,
            active: text?true:false,
    }
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
