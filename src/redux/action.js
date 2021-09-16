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
