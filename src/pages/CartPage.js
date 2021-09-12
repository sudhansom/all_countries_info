import React from 'react'

function CartPage({cart, setCart}) {
    setCart("Cart Page")
    return (
        <div className="cartPage">
            <h1>{cart}</h1>
        </div>
    )
}

export default CartPage
