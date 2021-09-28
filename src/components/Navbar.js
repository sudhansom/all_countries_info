import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { selectTheme, sortTheCountries} from '../redux/action';
import logo from "../images/home.png"
import cartIcon from "../images/cart.png"
import {Button, Dialog, DialogTitle} from "@material-ui/core"
import TablContainr from './dynamicTable/TablContainr';

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
        const [open, setOpen]=useState(false)
    const closeDialog = ()=>{
        setOpen(false)
    }
    const openDialog =()=>{
        console.log('clicket.....')
        setOpen(true)
    }
    
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
            <Dialog open={open} onClose={closeDialog}>
                <DialogTitle style={{background:"lightblue", color:"white"}}>Your favorite Countires</DialogTitle>
                <TablContainr select={2} />
                <div style={{display:"flex"}}>
                    <Button onClick={closeDialog} variant="contained" style={{ background:"green", color:"white" , width:"100%", cursor:"pointer"}}>Checkout</Button>
                </div>
            </Dialog>
        </div>
        
    )
}

export default Navbar
