import React from 'react'

function Details({ countryName }) {
  if ([countryName].length>0) {
    return (
      <div className="details">
        <h1>{countryName.name}</h1>
        <h2>Region:{countryName.region}</h2>
        <h3>Population : {countryName.population}</h3>
        <h4>Area : {countryName.area}</h4>
        <a className="back" href='/'>&#8592; back</a>
      </div>
    )
  }

  return <p>Loading</p>
}

export default Details