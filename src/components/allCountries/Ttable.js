import React from 'react'
import Table from '@material-ui/core/Table';
import TabHead from './TabHead';
import TabBody from './TabBody';

function Ttable({ total, setTotal, cart, setCart, allData, theme, setTheme}) {
    console.log('table data:', allData)
    return (
        <Table>
            <TabHead />
            <TabBody total={total} setTotal={setTotal} cart={cart} setCart={setCart} theme={theme} setTheme={setTheme}allData={allData}/>
            
        </Table>
    )
}

export default Ttable
