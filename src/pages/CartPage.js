import { ListItem } from '@material-ui/core'
import React from 'react'
import CartHeader from '../components/cart/CartHeader'
import CartBody from '../components/cart/CartBody'
import CartFooter from '../components/cart/CartFooter'

function CartPage({total, cart, setCart}) {
    //console.log("Cart inside cart Page: ", cart)
    return (
        <div className="cartPage">
            <h1>Your order is now ready</h1>
            <CartHeader />
            <CartBody cart={cart}/>
            <CartFooter total={total}/>
            
            
        </div>
    )
}

export default CartPage
