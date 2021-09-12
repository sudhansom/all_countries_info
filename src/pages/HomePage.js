import React from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import Ttable from '../components/allCountries/Ttable'

function HomePage({total, setTotal, cart, setCart, allData, theme, setTheme}) {
    console.log("Container Data:", allData)
    return (
        <TableContainer>
            <Ttable total={total} setTotal={setTotal} cart={cart} setCart={setCart} theme={theme}setTheme={setTheme} allData={allData}/>
        </TableContainer>
    )
}

export default HomePage
