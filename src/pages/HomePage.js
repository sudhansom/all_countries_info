import React from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import Ttable from '../components/allCountries/Ttable'


function HomePage({theme, setTheme}) {
    return (
        <TableContainer>
            <Ttable  theme={theme}setTheme={setTheme}/>
        </TableContainer>
    )
}

export default HomePage
