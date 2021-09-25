import React from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import Ttable from '../components/allCountries/Ttable'


function HomePage({theme, setTheme}) {
    return (
        <TableContainer>
            <div className="homePage">
                <Ttable  theme={theme}setTheme={setTheme}/>
            </div>
        </TableContainer>
    )
}

export default HomePage
