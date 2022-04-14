const Employee = require('./Employee');

class Engineer extends Employee {
    // create engineer specific property anf method for github username
    constructor(name) {
        super(name)
        this.github = '';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;