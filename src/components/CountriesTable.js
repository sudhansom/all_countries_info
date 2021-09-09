import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function CountriesTable({rows}) {
    
    return (
        <div>
        <TableContainer component={"Paper"}>
            <Table  aria-label="simple table">
                <TableHead>
                <TableRow>
                    <TableCell>Flag</TableCell>
                    <TableCell align="right">country</TableCell>
                    <TableCell align="right">Region</TableCell>
                    <TableCell align="right">Population</TableCell>
                    <TableCell align="right">Language</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {row.flag}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.region}</TableCell>
                    <TableCell align="right">{row.population}</TableCell>
                    <TableCell align="right">{row.languages[0]['iso639_1']}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
    </TableContainer>
            
        </div>
    )
}

export default CountriesTable
