import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TabRow from './TabRow';
import {useSelector} from 'react-redux';

function TabBody() {
    const allData = useSelector(state=>state.countries)
    const filterData = useSelector(state=>state.filterCountries)
    const searchActive = useSelector(state=>state.searchActive)
    let realData = searchActive?filterData:allData
    const theme = useSelector(state=>state.theme)

    return (
        <TableBody>
        {
            realData.map((item, index)=>(
                <TabRow  columnData={item} bgcolor={index%2===0?theme[0]:theme[1]}/>))
        }
            
        </TableBody>
    )
    }

export default TabBody
