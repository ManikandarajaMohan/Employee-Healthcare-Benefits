export const getEmployees = () => {
    const data = localStorage.getItem('employees');
    return data ? JSON.parse(data) : [
        { name: "Test", id: 123, dependents: [{ name: "dependent1", relation: "spouse" }] },
        {
            name: "Test1", id: 1233, dependents: [
                { name: "dependent1", relation: "children" },
                { name: "Adependent2", relation: "spouse" },
            ]
        }
    ];
};

export const saveEmployees = (employees) => {
    localStorage.setItem('employees', JSON.stringify(employees));
};