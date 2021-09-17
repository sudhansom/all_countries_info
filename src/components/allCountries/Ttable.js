import React from 'react'
import Table from '@material-ui/core/Table';
import TabHead from './TabHead';
import TabBody from './TabBody';

function Ttable({ theme, setTheme}) {
    return (
        <Table>
            <TabHead />
            <TabBody  theme={theme} setTheme={setTheme}/>
            
        </Table>
    )
}

export default Ttable
