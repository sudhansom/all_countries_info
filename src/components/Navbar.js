import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux';


function Navbar({ setCountries, countries, theme,setTheme}) {
    const [input, setInput] = useState('')
    const total = useSelector(state=>state.total)
    
    const searchField = (text)=>{
        setInput(text)
    }
    
    
    
    const changeTheme = ()=>{
        setTheme(theme[0]==='#ccd7e8'?['#97b2db','#a7f2ed']:['#ccd7e8','#f5f4c9'])
        console.log("theme chamged", theme)
    }
    const filterCountries = (text)=>{
        setCountries(countries.filter(elem=>elem.name.toLowerCase().startsWith(text)))
    }
    return (
        <div className="navbar">
            <div>
                <label className="theme" onClick={changeTheme}> Select Theme  </label>
                <select>
                    <option>Red</option>
                    <option>Yellow</option>
                    <option>Green</option>
                </select>
            </div>
            <div>
                <input type="text" value={input} placeholder="Search" onChange={(e)=>{searchField(e.target.value); filterCountries(e.target.value)}}></input>
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
