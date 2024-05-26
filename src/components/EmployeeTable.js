import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { healthCareCostPerPaycheck } from '../utils';

function EmployeeTable({ employees, handleUpdate, handleDelete }) {

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Employee Name</TableCell>
                        <TableCell>Dependents</TableCell>
                        <TableCell>Contribution per paycheck</TableCell>
                        <TableCell align="right"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map((employee, index) => (
                        <TableRow
                            key={employee.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {employee.name}
                            </TableCell>
                            <TableCell component="th" scope="row">
                                {employee.dependents.map(dependent => dependent.name).join(', ')}
                            </TableCell>
                            <TableCell >&#36; {healthCareCostPerPaycheck(employee)}</TableCell>
                            <TableCell align="right">
                                <Stack spacing={2} direction="row">
                                    <Button variant="contained" onClick={() => handleUpdate(employee)}>Edit</Button>
                                    <Button variant="contained"
                                        onClick={() => handleDelete(index)}>
                                        Delete
                                    </Button>
                                </Stack>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default EmployeeTable