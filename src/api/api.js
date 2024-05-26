export const getEmployees = () => {
    const data = localStorage.getItem('employees');
    return data ? JSON.parse(data) : [
        { name: "Martin James", id: 123, dependents: [{ name: "Alice", relation: "spouse" }] },
        {
            name: "David Hecht", id: 1234, dependents: [
                { name: "Freya", relation: "spouse" },
                { name: "Dimitri", relation: "children" },
            ]
        }
    ];
};

export const saveEmployees = (employees) => {
    localStorage.setItem('employees', JSON.stringify(employees));
};