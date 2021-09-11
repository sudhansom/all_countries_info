import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function TabBody({allData, theme, setTheme}) {
    console.log('AllData Body:',allData)
    return (
        <TableBody>
        {
            allData.map((item, index)=>(   
            <TableRow  bgColor={index%2===0?theme[0]:theme[1]}>
            <TableCell><img width="100px" height="50px" src={item.flag}></img></TableCell>
            <TableCell> <a href={item.name}>{item.name}</a> </TableCell>
            <TableCell>{item.population}</TableCell>
            <TableCell>{item.region}</TableCell>
            <TableCell>{item.languages[0]['name']}</TableCell>
            <TableCell>{item.area}</TableCell>
            </TableRow>))
        }
            
        </TableBody>
    )
}

export default TabBody