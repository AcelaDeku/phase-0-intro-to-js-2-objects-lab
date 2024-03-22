function updateEmployeeWithKeyAndValue(employee, key, value) {
    return { ...employee, [key]: value };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const clone = { ...employee };
    delete clone[key];
    return clone;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

const employee = {
    id: 1,
    name: 'John Doe',
    department: 'Engineering'
}