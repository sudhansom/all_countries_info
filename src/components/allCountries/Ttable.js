import React from 'react'
import Table from '@material-ui/core/Table';
import TabHead from './TabHead';
import TabBody from './TabBody';

function Ttable({allData}) {
    console.log('table data:', allData)
    return (
        <Table>
            <TabHead />
            <TabBody allData={allData}/>
            
        </Table>
    )
}

export default Ttable
