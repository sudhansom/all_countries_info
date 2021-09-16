import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {remove} from '../../redux/action'
function CartBody({cart}) {
    const carts = useSelector(state=>state.cart)
    const total = useSelector(state=>state.total)
    const dispatch = useDispatch()

    localStorage.setItem('cart', JSON.stringify(carts))
    localStorage.setItem('total',total)

    const deleteCountry = (country)=>{
        dispatch(remove(country))
    }

    return (
        <div>
        {carts.map(country=>{return (<ul className="cartBody">
            <li><img width="80px" height="50px"src={country.flag}></img></li>
            <li>{country.name}</li>
            <li>{country.area}</li>
            <button className="btn" onClick={()=>{deleteCountry(country.name)}}>Delete</button>
            </ul>)})} 
        </div>
    )
}

export default CartBody
