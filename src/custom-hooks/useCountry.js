// This hook is used to fetch one specific country
import { useState, useEffect } from "react";
const useCountry = (url)=>{
    const [data, setData] = useState([])
    const [error, setError] = useState('');
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const result = await fetch(url).then(response=>response.json());
                setData(result) // sets data = result   
            }
            catch(err){
                setError(err)
            }
        }
        fetchData()
    }, [url])
    return [error, data]
}
export default useCountry
