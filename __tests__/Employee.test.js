const Employee = require('../lib/Employee');

test('creates a new employee', () => {
    const employee = new Employee('Michael Jackson');

    expect(employee.name).toBe('Michael Jackson');
});

test("adds ID number for employee", () => {
    const employee = new Employee('Michael Jackson');
    employee.id = 1;

    expect(employee.id).toEqual(expect.any(Number));
});

test('adds email address for employee ', () => {
    const employee = new Employee('Michael Jackson');
    employee.email = 'm.jackson@bad.co';

    expect(employee.email).toBe('m.jackson@bad.co');
});

test('checks job role for employee', () => {
    const employee = new Employee('Michael Jackson');

    expect(employee.role).toBe('Employee');
});

test('returns name of employee', () => {
    const employee = new Employee('Michael Jackson');
 
    expect(employee.name).toBe(employee.getName());
})

test('returns id of employee', () => {
    const employee = new Employee('Michael Jackson');
    employee.id = 1;
 
    expect(employee.id).toBe(employee.getId());
})

test('returns email of employee', () => {
    const employee = new Employee('Michael Jackson');
    employee.email = 'm.jackson@bad.co';
 
    expect(employee.email).toBe(employee.getEmail());
})

test('returns job role of employee', () => {
    const employee = new Employee('Michael Jackson');
    employee.role = 'Employee';

    expect(employee.role).toBe(employee.getRole());
})
