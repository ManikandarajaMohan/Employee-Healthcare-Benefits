

export const totalCostPerPayCheck = 2000;
export const discount = 10;
export const totalPayCheckPerYear = 26;
export const employeeCost = 1000;
export const dependentCost = 500;


export const healthCareCostPerPaycheck = (employee) => {
    let totalCost = employeeCost;

    // calculating Discount
    if (employee.name?.toLowerCase().startsWith('a')) {
        totalCost = totalCost * (1 - (discount / 100));
    }

    employee.dependents.forEach(dependent => {
        let cost = dependentCost;
        if (dependent.name?.toLowerCase().startsWith('a')) {
            cost = cost * (1 - (discount / 100));
        }
        totalCost += cost;
    });

    // TotalCost Per Paycheck
    return (totalCost / totalPayCheckPerYear).toFixed(2);
}