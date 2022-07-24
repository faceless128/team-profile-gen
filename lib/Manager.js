const Employee = require('./Employee');

class Manager extends Employee {
  // create manager specific property and method for office number
  constructor(name) {
    super(name);
    this.role = 'Manager';
    this.office = '';
  }
  getOffice() {
    return this.office;
  }
}

module.exports = Manager;