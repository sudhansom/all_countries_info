import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { selectTheme, sortTheCountries} from '../redux/action';
import logo from "../images/home.png"
import cartIcon from "../images/cart.png"
import fullmoon from "../images/fullmoon.png"
import darkmoon from "../images/darkmoon.png"

function Navbar() {
    const [input, setInput] = useState('')
    const total = useSelector(state=>state.reducer.total)
    const countries = useSelector(state=>state.reducer.countries)
    
    const dispatch = useDispatch()
    
    const handleTheme = (e)=>{
            dispatch(selectTheme(e.target.value))
        }
    const sortCountries = (e)=>{
            e.preventDefault()
            dispatch(sortTheCountries(e.target.value))
        }
    return (
        <div className="navbar">
            <div >
                <Link  to={"/"}>
                <img className="homeIcon" src={logo} alt="logo"></img>
                </Link>
            </div>
            <div  className="cartImage1">
                <Link  to={"/cart"}>
                <img className="homeIcon" src={cartIcon} alt="cart icon"></img>
                <span><sup className="cartValue">{total}</sup></span>
                </Link>
            </div>
        </div>
        
    )
}

export default Navbar
