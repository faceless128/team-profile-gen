const Manager = require('../lib/Manager');

test('adds office number for manager', () => {
    const manager = new Manager('Michael Jackson');
    manager.office = '4B';

    expect(manager.office).toBe('4B');
});

test('returns office number of manager', () => {
    const manager = new Manager('Michael Jackson');
    manager.office = '4B';
 
    expect(manager.office).toBe(manager.getOffice());
})

test('returns job role of manager', () => {
    const manager = new Manager('Michael Jackson');
    manager.role = 'Manager';

    expect(manager.role).toBe(manager.getRole());
})
