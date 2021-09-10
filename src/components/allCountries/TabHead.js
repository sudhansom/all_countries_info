import React from 'react'
import TableHead from '@material-ui/core/TableHead';
import TabRow from './TabRow';

function TabHead() {
    return (
        <TableHead bgColor="lightgreen" textColor="red">
            <TabRow />
        </TableHead>
    )
}

export default TabHead
