import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { filterSearchCountries} from '../redux/action';

function Navbar({ setCountries, theme,setTheme}) {
    const [input, setInput] = useState('')
    const total = useSelector(state=>state.total)
    const countries = useSelector(state=>state.countries)
    
    const dispatch = useDispatch()
    
    const searchField = (text)=>{
        setInput(text)
    }
    const changeTheme = ()=>{
        setTheme(theme[0]==='#ccd7e8'?['#97b2db','#a7f2ed']:['#ccd7e8','#f5f4c9'])
        console.log("theme chamged", theme)
    }
    const filterCountries = (e, text)=>{
        console.log('text value',text)
        e.preventDefault()
        dispatch(filterSearchCountries(countries.filter(elem=>elem.name.toLowerCase().startsWith(text)), text))
    }
    return (
        <div className="navbar">
            <div>
                <h3><Link to={"/"}>Home</Link></h3>
            </div>
            <div>
                <label className="theme" onClick={changeTheme}> Select Theme  </label>
                <select>
                    <option>Red</option>
                    <option>Yellow</option>
                    <option>Green</option>
                </select>
            </div>
            <div>
                <input type="text" value={input} placeholder="Search" onChange={(e)=>{searchField(e.target.value); filterCountries(e, e.target.value)}}></input>
                <button>Search</button>
            </div>
            <div  className="cartImage">
                <Link  to={"/cart"}>
                <p><sup className="cartValue">{total}</sup></p>
                </Link>
            </div>
        </div>
        
    )
}

export default Navbar
