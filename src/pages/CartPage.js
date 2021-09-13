import React from 'react'

function CartPage({cart, setCart}) {
    setCart("Cart Page")
    return (
        <div className="cartPage">
            <h1>This is a Cart Page which displays all the Basket items.</h1>
            <h3>{cart}</h3>
        </div>
    )
}

export default CartPage
