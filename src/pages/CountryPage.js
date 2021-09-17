import React from 'react'
import Image from '../components/oneCountry/Image'
import Details from '../components/oneCountry/Details';
import {useParams} from 'react-router-dom'

import useCountry from '../custom-hooks/useCountry';
function CountryPage() {
    const param = useParams()
    const {countryName} = param
  
  const [err, country] = useCountry(countryName)
  console.log('App:~',country)

    return (
        <div className="country">
            <Image image={country}/>
            <Details countryName={country}/>
        </div>
    )
}

export default CountryPage
