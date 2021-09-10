import React from 'react'

function Image({countryImage}) {
    
    return (
        <div>
            <img width="300px" height="300px" src={countryImage.flag} alt="image to flag"></img>
        </div>
    )
}

export default Image
