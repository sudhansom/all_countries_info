import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';
import logo from "../images/home.png"
import cartIcon from "../images/cart.png"
import {Button, Dialog, DialogTitle} from "@material-ui/core"
import TablContainr from './dynamicTable/TablContainr';

function Navbar() {
    const cart = useSelector(state=>state.reducerCountries.cart)
    const total = cart.length
    
    const [open, setOpen]=useState(false)
    const closeDialog = ()=>{
        setOpen(false)
    }
    const openDialog =()=>{
        console.log('clicket.....')
        setOpen(true)
    }
    //stylings...
    const buttonDisplay = {display:"flex"};
    const buttonStyles = { background:"green", color:"white" , width:"100%", cursor:"pointer"}
    const dialogHead = {background:"lightblue"}
    //const bgColor = {background:theme}

    return (
        <div className="navbar">
            <div >
                <Link  to={"/"}>
                <img className="homeIcon" src={logo} alt="logo"></img>
                </Link>
            </div>
            <div  className="cartImage">
                <div  onClick={()=>openDialog()}>
                <img className="homeIcon" src={cartIcon} alt="cart icon"></img>
                <span><sup className="cartValue">{total}</sup></span>
                </div>
            </div>
            <Dialog open={open} onClose={closeDialog} >
                <DialogTitle style={dialogHead}>Your favorite Countires</DialogTitle>
                <TablContainr select={2}  />
                <div style={buttonDisplay}>
                    <Button onClick={closeDialog} variant="contained" style={buttonStyles}>Checkout</Button>
                </div>
            </Dialog>
        </div>
        
    )
}

export default Navbar
