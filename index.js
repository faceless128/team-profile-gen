const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const getHTML = require('./getHTML');

// Request the Manager information
const GetManager = () => {
    return inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: "What is the Manager's name?",
        validate: nameInput => {
            if (nameInput) {
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
                return true;
            } else {
                console.log("Please enter the Manager's office number!");
                return false;
            }
        }
    }])
    .then(answers => {
        teamMembers = [];
        manager = new Manager(answers.name);
        manager.id = answers.id;
        manager.email = answers.email;
        manager.office = answers.office;
        teamMembers.push(manager);
        // console.log(teamMembers);
        AddEmployees(teamMembers);
    })
}

// Loop to add employees and end adding employees
const AddEmployees = teamMembers => {
    return inquirer.prompt({
        type: 'list',
        message: 'Would you like to add an employee to the team?',
        name: 'action',
        choices: ['Yes, add an Engineer', 'Yes, add an Intern', 'No, I am finished adding employees']
    })
    .then(({ action }) => {
        if (action === 'Yes, add an Engineer') {
            // console.log(teamMembers);
            return GetEngineer(teamMembers);
        } else if (action === 'Yes, add an Intern') {
            // console.log(teamMembers);
            return GetIntern(teamMembers);
        } else {
            // console.log(teamMembers);
            getHTML(teamMembers);
            return true;
        }
    })

}

// Request for Engineer information
const GetEngineer = teamMembers => {
    return inquirer.prompt([{
        type: 'text',
        name: 'name',
        message: "What is the Engineer's name?",
        validate: nameInput => {
            if (nameInput) {
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
                return true;
            } else {
                console.log("Please enter the Engineer's GitHub username!");
                return false;
            }
        }
    }])
    .then(answers => {
        engineer = new Engineer(answers.name);
        engineer.id = answers.id;
        engineer.email = answers.email;
        engineer.github = answers.github;
        teamMembers.push(engineer);
        // console.log(teamMembers);
        AddEmployees(teamMembers);
    })
}

// Request for Intern information
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
    .then(answers => {
        intern = new Intern(answers.name);
        intern.id = answers.id;
        intern.email = answers.email;
        intern.school = answers.school;
        teamMembers.push(intern);
        console.log(teamMembers);
        AddEmployees(teamMembers);
    })
}

// Call to start application
GetManager()
// .then(teamMembers => {return getHTML(teamMembers)})