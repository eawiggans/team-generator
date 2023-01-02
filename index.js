const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { default: inquirer } = require('inquirer');

let employeeArr = [];

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

        });
};



const init = () => {
    promptManager()
    .then((data) => writeFile("./utils/sample/README.md", getGenMarkdown.generateMarkdown(data)))
    .then(() => console.log("Successfully wrote readme"))
    .catch((err) => console.error(err))
}

init()
