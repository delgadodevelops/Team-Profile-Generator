// Employee constructor 
const Employee = require('../lib/Employee');

// creates the Employee object 
test('creates an employee object', () => {
    const employee = new Employee('David', 25, 'david@gmail.com', 'david12345');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// checks for Employee Name
test('gets employee name', () => {
    const employee = new Employee('David', 25, 'david@gmail.com', 'david12345');

    expect(employee.getName()).toEqual(expect.any(String));
});

// checks for Employee ID 
test('gets employee ID', () => {
    const employee = new Employee('David', 25, 'david@gmail.com', 'david12345');

    expect(employee.getId()).toEqual(expect.any(Number));
});

// checks for Employee Email
test('gets employee email', () => {
    const employee = new Employee('David', 25, 'david@gmail.com', 'david12345');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

// checks for Employee Role
test('gets role of employee', () => {
    const employee = new Employee('David', 25, 'david@gmail.com', 'david12345');

    expect(employee.getRole()).toEqual("Employee");
}); 