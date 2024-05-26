import React from 'react'
import { useFormik, FormikProvider } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DependentForm from './DependentForm';

function EmployeeForm({ employee, onSubmit, onCancel }) {

  const formik = useFormik({
    initialValues: {
      name: employee?.name || '',
      id: employee?.id || null,
      dependents: employee?.dependents || [],
    },
    onSubmit: values => {
      onSubmit(values);
    }
  });

  return (
    <Box sx={{ p: 2, width: 600 }}>
      <Typography variant="p" component="p" sx={{ fontSize: '24px', pb: 4 }}>
        Employee Details
      </Typography>
      <FormikProvider value={formik}>
        <form onSubmit={formik.handleSubmit}>
          <Stack spacing={2} direction="column">
            <TextField
              required
              id="name"
              label="Employee Name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />

            <DependentForm formik={formik} />
            <Stack spacing={2} direction="row" sx={{ pb: 2 }}>
              <Button color="primary" variant="outlined" fullWidth onClick={() => onCancel()}>
                Cancel
              </Button>
              <Button color="primary" variant="contained" fullWidth type="submit">
                Submit
              </Button>
            </Stack>
          </Stack>
        </form>
      </FormikProvider>
    </Box>
  )
}

export default EmployeeForm