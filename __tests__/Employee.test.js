const Employee = require('../lib/Employee');

// test for creating the Employee class object

test('creates an employee object', () => {
    const employee = new Employee('Rick', 1, 'rmartin1985@att.net');

    expect(employee.name).toBe('Rick');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('rmartin1985@att.net');
})

test('access employee name', () => {
    const employee = new Employee('Rick', 1, 'rmartin1985@att.net');

    expect(employee.getName()).toBe('Rick');
})

test('access employee id', () => {
    const employee = new Employee('Rick', 1, 'rmartin1985@att.net');

    expect(employee.getId()).toBe(1);
})

test('access employee email', () => {
    const employee = new Employee('Rick', 1, 'rmartin1985@att.net');

    expect(employee.getEmail()).toBe('rmartin1985@att.net');
})

test('gets the role of the employee', () => {
    const employee = new Employee('Rick', 1, 'rmartin1985@att.net');

    expect(employee.getRole()).toBe(Employee);
})