import React from 'react'
import TableHead from '@material-ui/core/TableHead';
import TabRow from './TabRow';

function TabHead() {
    const headData={flag:'Flag', name:'Country', population:'Population', region:'Region', languages:[{name:'Language'}], area:'Area (sq. km)', select:'Select'}
    return (
        <TableHead>
            <TabRow columnData={headData} bgcolor="lightgreen"/>
        </TableHead>
    )
}

export default TabHead
