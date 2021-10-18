const Employee = require('../lib/Employee');

// test for creating the Employee class object
const { TestWatcher } = require("@jest/core");

test('creates an employee object', () => {
    const employee = {
        name: 'Rick',
        id: 1,
        email: 'rmartin1985@att.net'
    };

    expect(employee.name).toBe('Rick');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('rmartin1985@att.net');
})