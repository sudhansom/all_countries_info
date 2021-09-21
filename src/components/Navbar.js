import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import { filterSearchCountries, selectTheme, sortTheCountries} from '../redux/action';

function Navbar() {
    const [input, setInput] = useState('')
    const total = useSelector(state=>state.reducer.total)
    const countries = useSelector(state=>state.reducer.countries)
    
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
    const sortCountries = (e)=>{
            e.preventDefault()
            dispatch(sortTheCountries(e.target.value))
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
            <div>
                <label className="sort"> Sort By:  </label>
                <select onChange={sortCountries}>
                    <option>name</option>
                    <option>region</option>
                    <option>population</option>
                    <option>area</option>
                </select>
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
