const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name) {
        super(name)
        this.office = '';
    }
    getOffice() {
        return this.office;
    }
}

module.exports = Manager;