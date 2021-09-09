import React from 'react'
import TableRow from '@material-ui/core/TableRow';
import TabCell from './TabCell';

function TabRow() {
    const headData=['Flag', 'Country', 'Population', 'Region', 'Language']
    return (
        <TableRow>
            {
                headData.map(elem=>{return <TabCell name={elem}/>})
            }
            
        </TableRow>
    )
}

export default TabRow
