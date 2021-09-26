import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {removeCountry} from '../../redux/action'
import Button from '@material-ui/core/Button';
import DeleteButton from '@material-ui/icons/Delete'
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
            <Button variant="contained" startIcon={<DeleteButton/>} className="btn" onClick={()=>{deleteCountry(country.name)}}>Delete</Button>
            </ul>)})} 
        </div>
    )
}

export default CartBody
