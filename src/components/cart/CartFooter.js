import React from 'react'

function CartFooter({total}) {
    return (
        <div className="cartFooter">
            <h4>Total Quantity: {total}</h4>
            <h4>Total Price: {total * 100}</h4>
            <button className="btn">Checkout</button>
            
        </div>
    )
}

export default CartFooter
