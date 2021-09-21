import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeCountry} from '../../redux/action'
function CartBody() {
    const cart = useSelector(state=>state.reducer.cart)
    const total = useSelector(state=>state.reducer.total)
    const dispatch = useDispatch()

    localStorage.setItem('cart', JSON.stringify(cart))
    localStorage.setItem('total',total)

    const deleteCountry = (country)=>{
        dispatch(removeCountry(country))
    }

    return (
        <div>
        {cart.map(country=>{return (<ul className="cartBody">
            <li><img width="80px" height="50px"src={country.flag}></img></li>
            <li>{country.name}</li>
            <li>{country.area}</li>
            <button className="btn" onClick={()=>{deleteCountry(country.name)}}>Delete</button>
            </ul>)})} 
        </div>
    )
}

export default CartBody
