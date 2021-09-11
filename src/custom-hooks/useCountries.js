import { useState, useEffect } from "react";
const useCountries = (url, setCountries)=>{
    const [data, setData] = useState([])
    const [error, setError] = useState('');
    useEffect(()=>{
        const fetchData = async()=>{
            try{
                const result = await fetch(url).then(response=>response.json());
                console.log('inHooks:',result[0].name)// its fine here ...i want result like this in App.js
                setData(result) // sets data = result 
                setCountries([...result])  
                setError("")
            }
            catch(err){
                setError(err)
                setData([])
            }
        }
        fetchData()
    }, [url, setCountries])
    return [error, data]
}
export default useCountries
