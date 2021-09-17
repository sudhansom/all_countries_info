import { useState, useEffect} from "react";
import { getAllCountries } from "../redux/action";
import { useDispatch, useSelector } from "react-redux";


const useCountries = ()=>{
    const dispatch = useDispatch()
    const err = useSelector(state=>state.err)
    const data = useSelector(state=>state.countries)
    useEffect(()=>{
        dispatch(getAllCountries())
    }, [dispatch])
    return [err, data]
}
export default useCountries
