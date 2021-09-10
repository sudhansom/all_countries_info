import React from 'react'

function Image({image}) {
    
    return (
        <div>
            <img width="300px" height="300px" src={image} alt="image to flag"></img>
        </div>
    )
}

export default Image
