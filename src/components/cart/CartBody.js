import React from 'react'

function CartBody({cart}) {
    let cartCountry = []
    let cartQuantity = []
    let cartFlag = []
    
    for (const key in cart) {
        cartCountry = [...cartCountry, key]
        cartQuantity = [...cartQuantity, cart[key].quantity]
        cartFlag= [...cartFlag, cart[key].flag]
    }
    console.log("cart page: ",cartCountry, cartQuantity)
    return (
        <div>
            <ul className="cartBody">
                <li><img  width="80px" height="50px" src={cartFlag[0]}></img></li>
                <li>{cartCountry[0]}</li>
                <li>{cartQuantity[0]}</li>
                <li>100 dkk</li>
            </ul>  
            <ul className="cartBody">
                <li><img  width="80px" height="50px" src={cartFlag[1]}></img></li>
                <li>{cartCountry[1]}</li>
                <li>{cartQuantity[1]}</li>
                <li>100 dkk</li>
            </ul>  
            <ul className="cartBody">
                <li><img  width="80px" height="50px" src={cartFlag[2]}></img></li>
                <li>{cartCountry[2]}</li>
                <li>{cartQuantity[2]}</li>
                <li>100 dkk</li>
            </ul>  
            <ul className="cartBody">
                <li><img  width="80px" height="50px" src={cartFlag[3]}></img></li>
                <li>{cartCountry[3]}</li>
                <li>{cartQuantity[3]}</li>
                <li>100 dkk</li>
            </ul>    
        </div>
    )
}

export default CartBody
