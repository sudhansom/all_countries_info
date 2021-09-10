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
                setError("no error") 
            }
            catch(err){
                setError('error while fetching data')
                setData([])
            }
        }
        fetchData()
    }, [url])
    return [error, data]
}
export default useCountry
