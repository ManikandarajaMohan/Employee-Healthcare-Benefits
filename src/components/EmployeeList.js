import React, { useReducer, useState } from 'react';
import Box from '@mui/material/Box';
import { getEmployees } from './../api/api';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import EmployeeForm from './EmployeeForm';
import { employeeReducer } from './../employeeReducer';
import EmployeeTable from './EmployeeTable';
import { v4 as uuidv4 } from 'uuid';

function EmployeeList() {
    const [employees, dispatch] = useReducer(employeeReducer, getEmployees());
    const [currentEmployee, setCurrentEmployee] = useState(null);
    const [open, setOpen] = useState(false);

    const handleEmployeeDelete = (empIndex) => {
        if(window.confirm("Are you sure want to delete ?") === true) {
            dispatch({
                type: 'delete',
                index: empIndex
            })
        }
    }

    const handleEmployee = (currentEmp) => {
        setCurrentEmployee(currentEmp);
        setOpen(true);
    }

    const handleEmployeeSubmit = (values) => {
        const employeeDetails = values;
        if (employeeDetails?.id !== null) {
            dispatch({
                type: 'update',
                payLoad: employeeDetails
            })
        } else {
            employeeDetails.id = uuidv4();
            console.log(employeeDetails)
            dispatch({
                type: 'add',
                payLoad: employeeDetails
            })
        }
        setOpen(false);
    }

    return (
        <Box elevation={0} sx={{ margin: '16px', padding: '16px' }}>
            <Button sx={{ float: 'right', marginBottom: '16px' }}
                variant="contained"
                onClick={() => handleEmployee(null)}>Add Employee</Button>
            <EmployeeTable employees={employees}
                handleUpdate={handleEmployee}
                handleDelete={handleEmployeeDelete}
            />
            <Drawer
                open={open}
                anchor={'right'}
                onClose={() => setOpen(false)}
            >
                <EmployeeForm
                    employee={currentEmployee}
                    onSubmit={handleEmployeeSubmit}
                    onCancel={() => setOpen(false)}
                />
            </Drawer>
        </Box>
    )
}

export default EmployeeList