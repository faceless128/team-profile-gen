const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const GetManager = () => {
    return inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: "What is the Manager's name?",
        validate: nameInput => {
            if (nameInput) {
                manager = new Manager(nameInput);
                manager.role = 'Manager';
                return true;
            } else {
                console.log("Please enter the Manager's name!");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: "What is the Manager's employee ID number?",
        validate: idInput => {
            if (idInput) {
                manager.id = idInput;
                return true;
            } else {
                console.log("Please enter the Manager's employee ID number!");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the Manager's email address?",
        validate: emailInput => {
            if (emailInput) {
                manager.email = emailInput;
                return true;
            } else {
                console.log("Please enter the Manager's email address!");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'office',
        message: "What is the Manager's office number?",
        validate: officeInput => {
            if (officeInput) {
                manager.office = officeInput;
                return true;
            } else {
                console.log("Please enter the Manager's office number!");
                return false;
            }
        }
    }])
}

const GetEmployees = manager => {
    teamMembers = [];
    teamMembers.push(manager);
    AddEmployees(teamMembers);
}

const AddEmployees = teamMembers => {
    return inquirer.prompt({
        type: 'list',
        message: 'Would you like to add an employee to the team?',
        name: 'action',
        choices: ['Yes, add an Engineer', 'Yes, add an Intern', 'No, I am finished adding employees']
    })
    .then(({ action }) => {
        if (action === 'Yes, add an Engineer') {
            console.log(teamMembers);
            return GetEngineer(teamMembers);
        } else if (action === 'Yes, add an Intern') {
            console.log(teamMembers);
            return GetIntern(teamMembers);
        } else {
            console.log(teamMembers);
            return true;
        }
    })

}

const GetEngineer = teamMembers => {
    return inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: "What is the Engineer's name?",
        validate: nameInput => {
            if (nameInput) {
                engineer = new Engineer(nameInput);
                engineer.role = 'Engineer';
                return true;
            } else {
                console.log("Please enter the Engineer's name!");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: "What is the Engineer's employee ID number?",
        validate: idInput => {
            if (idInput) {
                engineer.id = idInput;
                return true;
            } else {
                console.log("Please enter the Engineer's employee ID number!");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the Engineer's email address?",
        validate: emailInput => {
            if (emailInput) {
                engineer.email = emailInput;
                return true;
            } else {
                console.log("Please enter the Engineer's email address!");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'github',
        message: "What is the Engineer's GitHub username?",
        validate: githubInput => {
            if (githubInput) {
                engineer.github = githubInput;
                return true;
            } else {
                console.log("Please enter the Engineer's GitHub username!");
                return false;
            }
        }
    }])
    .then(employeeData => {
        teamMembers.push(employeeData);
        console.log(teamMembers);
        return AddEmployees(teamMembers);
    })
}

const GetIntern = teamMembers => {
    return inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: "What is the Intern's name?",
        validate: nameInput => {
            if (nameInput) {
                intern = new Intern(nameInput);
                return true;
            } else {
                console.log("Please enter the Intern's name!");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'id',
        message: "What is the Intern's employee ID number?",
        validate: idInput => {
            if (idInput) {
                intern.id = idInput;
                return true;
            } else {
                console.log("Please enter the Intern's employee ID number!");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'email',
        message: "What is the Intern's email address?",
        validate: emailInput => {
            if (emailInput) {
                intern.email = emailInput;
                return true;
            } else {
                console.log("Please enter the Intern's email address!");
                return false;
            }
        }
    },
    {
        type: 'text',
        name: 'school',
        message: "What is the Intern's School?",
        validate: schoolInput => {
            if (schoolInput) {
                intern.school = schoolInput;
                return true;
            } else {
                console.log("Please enter the Intern's School!");
                return false;
            }
        }
    }])
    .then(employeeData => {
        teamMembers.push(employeeData);
        console.log(teamMembers);
        return AddEmployees(teamMembers);
    })
}

GetManager()
    .then(GetEmployees);