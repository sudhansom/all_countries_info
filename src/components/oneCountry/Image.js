import React from 'react'

function Image({ image }) {
  return (
    <div className="countryImage">
      {image !== undefined ? (
        <img width='300px' height='300px' src={image.flag} alt='flag'></img>
      ) : (
        <p>hello</p>
      )}
    </div>
  )
}

export default Image