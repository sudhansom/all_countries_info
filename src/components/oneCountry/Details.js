import React from 'react'

function Details({countryName}) {
    
    return (
        <div>
            <h1>{countryName.name}</h1>
            <h2>Region:{countryName.region}</h2>
            <h3>Population : {countryName.population}</h3>
            <h4>Area : {countryName.area}</h4>
            <a href="/">Back</a>
        </div>
    )
}

export default Details
