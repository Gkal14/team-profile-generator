const Employee = require('../lib/Employee');

test('Creates new employee', () => {
    const employee = new Employee('John Doe', 1234, 'johndoe@email.com', 1234567890);

    expect(employee.name).toBe("John Doe");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
})

test('Checks all methods for Employee class', () => {
    const employee = new Employee('John Doe', 1234, 'johndoe@email.com', 1234567890);

    expect(employee.getName()).toBe(employee.name);
    expect(employee.getId()).toBe(employee.id);
    expect(employee.getEmail()).toBe(employee.email);
    expect(employee.getRole()).toBe('Employee');
})