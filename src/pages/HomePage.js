import React from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import Ttable from '../components/allCountries/Ttable'

function HomePage({allData, theme, setTheme}) {
    console.log("Container Data:", allData)
    return (
        <TableContainer>
            <Ttable theme={theme}setTheme={setTheme} allData={allData}/>
        </TableContainer>
    )
}

export default HomePage
