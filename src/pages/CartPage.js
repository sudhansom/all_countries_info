import { ListItem } from '@material-ui/core'
import React from 'react'
import CartHeader from '../components/cart/CartHeader'
import CartBody from '../components/cart/CartBody'
import CartFooter from '../components/cart/CartFooter'
import {useSelector} from 'react-redux'

function CartPage() {
    const total = useSelector(state=>state.reducer.total)
    if(total!==0){
        return (
        <div className="cartPage">
            <h1>Your order is now ready</h1>
            <CartHeader />
            <CartBody />
            <CartFooter />
        </div>
    )
    }
    else{
        return <h2>You have not selected any country yet!</h2>
    }
}

export default CartPage
