const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name) {
        super(name)
        this.github = '';
    }
    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;