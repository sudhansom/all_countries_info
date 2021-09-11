import React from 'react'

function Details({ countryName }) {
  if (countryName.length > 0) {
    const [country] = countryName
    return (
      <div className="details">
        <h1>{country.name}</h1>
        <h2>Region:{country.region}</h2>
        <h3>Population : {country.population}</h3>
        <h4>Area : {country.area}</h4>
        <a className="back" href='/'>&#8592; back</a>
      </div>
    )
  }

  return <p>Loading</p>
}

export default Details