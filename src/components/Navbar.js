import React, {useState} from 'react'

function Navbar({setCountries, countries, theme,setTheme}) {
    const [input, setInput] = useState('')
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
                <p className="theme" onClick={changeTheme}>Theme</p>
            </div>
            <div>
                <input type="text" value={input} placeholder="Search" onChange={(e)=>{searchField(e.target.value); filterCountries(e.target.value)}}></input>
                <button>Search</button>
            </div>
            <div>
                <p>Profile</p>
            </div>
        </div>
        
    )
}

export default Navbar