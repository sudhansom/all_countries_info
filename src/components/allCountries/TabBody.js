import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TabRow from './TabRow';
import {useSelector} from 'react-redux';

function TabBody() {
    const allData = useSelector(state=>state.reducer.countries)
    const filterData = useSelector(state=>state.reducer.filterCountries)
    const searchActive = useSelector(state=>state.reducer.searchActive)
    let realData = searchActive?filterData:allData
    const theme = useSelector(state=>state.reducerTheme.theme)
    
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
