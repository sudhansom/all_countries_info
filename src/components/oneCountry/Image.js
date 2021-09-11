import React from 'react'

function Image({ image }) {
  return (
    <div className="countryImage">
      {image[0] !== undefined ? (
        <img width='300px' height='300px' src={image[0].flag} alt='flag'></img>
      ) : (
        <p>hello</p>
      )}
    </div>
  )
}

export default Image