import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { filterSearchCountries, selectTheme} from '../redux/action';

function Navbar() {
    const [input, setInput] = useState('')
    const total = useSelector(state=>state.total)
    const countries = useSelector(state=>state.countries)
    const theme = useSelector(state=>state.theme)
    
    
    const dispatch = useDispatch()
    
    const searchField = (text)=>{
        setInput(text)
    }
    
    const filterCountries = (e, text)=>{
        console.log('text value',text)
        e.preventDefault()
        dispatch(filterSearchCountries(countries.filter(elem=>elem.name.toLowerCase().startsWith(text)), text))
    }
    const handleTheme = (e)=>{
            dispatch(selectTheme(e.target.value))
        }
    return (
        <div className="navbar">
            <div>
                <h3><Link to={"/"}>Home</Link></h3>
            </div>
            <div>
                <label className="theme"> Select Theme  </label>
                <select onChange={handleTheme}>
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
