import React from 'react'
import { FieldArray } from 'formik';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

function DependentForm({ formik }) {
    return (
        <FieldArray name="dependents">
            {({ _insert, remove, push }) => (
                <div>
                    <Stack spacing={2} direction="row"
                        justifyContent="space-between"
                        alignItems="center"
                        sx={{ pb: 4 }}
                    >
                        <Typography variant="p" component="p">
                            Dependent Details
                        </Typography>
                        <Button variant="outlined" onClick={() => push({ name: "", relation: "" })} startIcon={<AddIcon />}>
                            Add Dependent
                        </Button>
                    </Stack>
                    {formik.values.dependents.length > 0 &&
                        formik.values.dependents.map((_dependent, index) => (
                            <div key={index}>
                                <Stack spacing={2} direction="row" sx={{ pb: 2 }}>
                                    <TextField
                                        required
                                        sx={{ width: '65%' }}
                                        id={`dependents[${index}].name`}
                                        label={`Dependent Name`}
                                        onChange={formik.handleChange}
                                        value={formik.values.dependents[index].name}
                                    />
                                    <TextField
                                        required
                                        sx={{ width: '25%' }}
                                        id={`dependents[${index}].relation`}
                                        name={`dependents[${index}].relation`}
                                        select
                                        label="Relation"
                                        value={formik.values.dependents[index].relation}
                                        onChange={formik.handleChange}
                                    >
                                        <MenuItem value={"spouse"}>Spouse</MenuItem>
                                        <MenuItem value={"children"}>Children</MenuItem>
                                    </TextField>
                                    <IconButton aria-label="delete" onClick={() => remove(index)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Stack>
                            </div>
                        ))}
                </div>
            )}
        </FieldArray>
    )
}

export default DependentForm