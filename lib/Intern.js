const Employee = require('./Employee');

class Intern extends Employee {
  // create intern specific property and method for school
  constructor(name) {
    super(name);
    this.role = 'Intern';
    this.school = '';
  }
  getSchool() {
    return this.school;
  }
}

module.exports = Intern;