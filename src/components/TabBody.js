import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function TabBody({allData}) {
    console.log('AllData Body:',allData)
    return (
        <TableBody>
        {
            allData.map((item)=>(
            <TableRow>
            <TableCell><img width="100px" height="50px" src={item.flag}></img></TableCell>
            <TableCell> <a href="#">{item.name}</a> </TableCell>
            <TableCell>{item.population}</TableCell>
            <TableCell>{item.region}</TableCell>
            <TableCell>{item.languages[0]['name']}</TableCell>
            </TableRow>))
        }
            
        </TableBody>
    )
}

export default TabBody
