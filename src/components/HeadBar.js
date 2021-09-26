import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { selectTheme, sortTheCountries, filterSearchCountries} from '../redux/action';
import logo from "../images/home.png"
import cartIcon from "../images/cart.png"
import fullmoon from "../images/fullmoon.png"
import darkmoon from "../images/darkmoon.png"
import TextField from '@material-ui/core/TextField';

function HeadBar() {
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

    const searchField = (text)=>{
        setInput(text)
    }
    const filterCountries = (e, text)=>{
        console.log('text value',text)
        e.preventDefault()
        dispatch(filterSearchCountries(countries.filter(elem=>elem.name.toLowerCase().startsWith(text)), text))
    }
    return (
        <div className="headbar">
        
            <div>
                <label className="theme"> Change Theme:   </label>
                <select onChange={handleTheme}>
                    <option>Red</option>
                    <option>Yellow</option>
                    <option>Green</option>
                    <option>
                        <div >
                            <Link  to={"/"}>
                                <img className="moon" src={fullmoon} alt="logo"></img>
                            </Link>
                        </div>
                    </option>
                    <option>
                        <div >
                            <Link  to={"/"}>
                                <img className="moon" src={darkmoon} alt="logo"></img>
                            </Link>
                        </div>
                    </option>
                </select>
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
