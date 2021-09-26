import React from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import Ttable from '../components/allCountries/Ttable'
import HeadBar from '../components/HeadBar';


function HomePage({theme, setTheme}) {
    return (
        <TableContainer>
            <div className="homePage">
                    <HeadBar/>
                <Ttable  theme={theme}setTheme={setTheme}/>
            </div>
        </TableContainer>
    )
}

export default HomePage
