import React from 'react'

function CartBody({cart}) {

    return (
        <div>
        {cart.map(country=>{(<ul className="cartBody">
            <li><img width="80px" height="50px"src={cart[country].flag}></img></li>
            <li>{country}</li>
            <li>{cart[country].quantity}</li>
            <li>{100}</li>
            </ul>)})}
        {/*
            <ul className="cartBody">
                <li><img  width="80px" height="50px" src={cartFlag[0]}></img></li>
                <li>{cartCountry[0]}</li>
                <li>{cartQuantity[0]}</li>
                <li>100 dkk</li>
            </ul>  
        
            */}  
        </div>
    )
}

export default CartBody
