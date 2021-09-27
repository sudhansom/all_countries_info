import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


function DataTable({items, columns}) {
    if(items.length>0){
        return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        {
                            columns.map(col=>{
                                return(
                                    <TableCell>{col.label}</TableCell>
                                )
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                        {
                            items.map(element=>{
                                return (
                                    <TableRow>
                                        { 
                                            columns.map(c=>{
                                                return (
                                                    <TableCell>
                                                        {
                                                            c.renderContent(element)
                                                        }
                                                    </TableCell>
                                                )
                                            })
                                        }
                                    </TableRow>
                                )
                            })
                        }
                </TableBody>
            </Table>
        </TableContainer>
    )
    }else{
        return <p>Loading...</p>
    }
}

export default DataTable
