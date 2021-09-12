import React, {useState} from 'react'

function Navbar({ total, cart, setCountries, countries, theme,setTheme}) {
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
                <p><a href={"cart"}>{total}<img width="80px" height="50px" src={"../images/cart.png"} alt="no image"></img></a></p>
            </div>
        </div>
        
    )
}

export default Navbar
