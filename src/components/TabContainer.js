import React from 'react'
import TableContainer from '@material-ui/core/TableContainer';
import Ttable from './Ttable';

function TabContainer({allData}) {
    console.log("Container Data:", allData)
    return (
        <TableContainer>
            <Ttable allData={allData}/>
        </TableContainer>
    )
}

export default TabContainer
