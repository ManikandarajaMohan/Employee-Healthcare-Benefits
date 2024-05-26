import { saveEmployees } from './api/api';

export const employeeReducer = (employees, action) => {
    switch (action.type) {
        case 'add': {
            const newEmployees = [
                ...employees,
                action.payLoad
            ];
            saveEmployees(newEmployees);
            return newEmployees;
        }
        case 'update': {
            const updatedEmployees = employees.map((t) => {
                if (t.id === action.payLoad.id) {
                    return action.payLoad;
                } else {
                    return t;
                }
            });
            saveEmployees(updatedEmployees);
            return updatedEmployees;
        }
        case 'delete': {
            const filteredEmployees = employees.filter((t, i) => i !== action.index);
            saveEmployees(filteredEmployees);
            return filteredEmployees;
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

