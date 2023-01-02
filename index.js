const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { default: inquirer } = require('inquirer');

let employeeArr = [];

const promptMenu = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['Add engineer', 'Add intern', 'Quit application']
        }
    ])
    .then(choice => {
        switch (choice.menu) {
            case 'Add engineer':
                // engineer prompts function here;
                promptEngineer()
                break;
            case 'Add intern':
                // intern prompts function here;
                promptIntern()
                break;
            case 'Quit application':
                // generate html function here;
                break;
        }
    })
}

const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Manager name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Manager email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Manager office number',
            name: 'officeNum',
        },
    ])
    .then(function(answers) {
        const managerData = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
        employeeArr.push(managerData);
        promptMenu();
        });
};

const promptEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Engineer name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Engineer email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Manager github username',
            name: 'github',
        },
    ])
    .then(function(answers) {
        const engineerData = new Manager(answers.name, answers.id, answers.email, answers.github);
        employeeArr.push(engineerData);
        promptMenu();
        });
}

const promptIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'Intern name:',
            name: 'name',
        },
        {
            type: 'input',
            message: 'Employee ID:',
            name: 'id',
        },
        {
            type: 'input',
            message: 'Intern email address:',
            name: 'email',
        },
        {
            type: 'input',
            message: 'Intern school',
            name: 'school',
        },
    ])
    .then(function(answers) {
        const internData = new Manager(answers.name, answers.id, answers.email, answers.school);
        employeeArr.push(internData);
        promptMenu();
        });
};

const init = () => {
    promptManager()
    .then((data) => writeFile("./utils/sample/README.md", getGenMarkdown.generateMarkdown(data)))
    .then(() => console.log("Successfully wrote readme"))
    .catch((err) => console.error(err))
}

init()
