import React, {useSelector} from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TabRow from './TabRow';

function TabBody({total, setTotal, cart, setCart, allData, theme, setTheme}) {
    return (
        <TableBody>
        {
            allData.map((item, index)=>(
                <TabRow cart={cart} setCart={setCart} total={total} setTotal={setTotal} columnData={item} allData={allData}bgcolor={index%2===0?theme[0]:theme[1]}/>))
        }
            
        </TableBody>
    )
    }

export default TabBody
