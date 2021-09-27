import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { saveKeys, selectTheme, sortTheCountries, filterSearchCountries} from '../redux/action';
import logo from "../images/home.png"
import cartIcon from "../images/cart.png"
import fullmoon from "../images/fullmoon.png"
import darkmoon from "../images/darkmoon.png"
import TextField from '@material-ui/core/TextField';
import { Button, Dialog, DialogTitle, Checkbox } from '@material-ui/core';
import { Label } from '@material-ui/icons';


function HeadBar() {
    const [input, setInput] = useState('')
    const [colNames, setColNames]=useState([])
    const total = useSelector(state=>state.reducer.total)
    const countries = useSelector(state=>state.reducer.countries)
    let key={}
    if(countries.length>0){
         key = Object.keys(countries[0])
    }else{
        key=[]
    }
    console.log('key-value:', key)
    const dispatch = useDispatch()
    
    const handleTheme = (e)=>{
            dispatch(selectTheme(e.target.value))
        }
    const sortCountries = (e)=>{
            e.preventDefault()
            dispatch(sortTheCountries(e.target.value))
        }

    const searchField = (text)=>{
        setInput(text)
    }
    const filterCountries = (e, text)=>{
        console.log('text value',text)
        e.preventDefault()
        dispatch(filterSearchCountries(countries.filter(elem=>elem.name.toLowerCase().startsWith(text)), text))
    }
    const [open, setOpen]=useState(false)
    const closeDialog = ()=>{
        setOpen(false)
    }
    const openDialog =()=>{
        setOpen(true)
    }
    
    const handleChange= (e)=>{
        setColNames([...colNames, e.target.value])
    }
    const saveColNames = ()=>{
        dispatch(saveKeys(colNames))
        setColNames([])
    }
   
    return (
        <div className="headbar">
            <div>
                <Button onClick={()=>openDialog()} variant="text">Customize Table</Button>
                <Dialog open={open} onClose={closeDialog}>
                    <DialogTitle>Select Column Names</DialogTitle>
                    {
                        key.map(elem=>{return (<Checkbox label={elem} value={elem} onChange={handleChange}><Label>{elem}</Label></Checkbox>)})
                    }
                    
                    
                    <Button onClick={saveColNames}>save</Button>
                </Dialog>
            </div>

            <div >
                <div>
                <Link  to={"/"}>
                    <img className="moon" width="45px" height="45px" src={fullmoon} alt="logo"></img>
                </Link>
                <Link  to={"/"}>
                    <img className="moon"  width="45px" height="45px" src={darkmoon} alt="logo"></img>
                </Link>
                </div>
            </div>
        
            <div className="searchField">
                    <TextField 
                    variant="standard"
                    type="text" value={input} placeholder="Search" onChange={(e)=>{searchField(e.target.value); filterCountries(e, e.target.value)}} />
                    
                </div>
            <div>
                <label className="sort"> Sort By:  </label>
                <select onChange={sortCountries}>
                    <option>name</option>
                    <option>region</option>
                    <option>population</option>
                    <option>area</option>
                </select>
            </div>

            
        </div>
        
    )
}

export default HeadBar
