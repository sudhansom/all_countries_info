// This hook is used to fetch one specific country
import { useState, useEffect } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { getOneCountry } from "../redux/action";
import { useParams } from "react-router-dom";
const useCountry = ()=>{
    const {countryName} = useParams()
    const error = useSelector(state=>state.reducer.err)
    const data = useSelector(state=>state.reducer.country)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getOneCountry(countryName))
    }, countryName)
    return [error, data]
}
export default useCountry
