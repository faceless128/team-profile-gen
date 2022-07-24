class Employee {
  constructor(name) {
    // create base employee class for shared properties
    this.name = name;
    this.id = '';
    this.email = '';
    this.role = 'Employee';
  }
  // create shared methods for all employees
  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
}

module.exports = Employee;