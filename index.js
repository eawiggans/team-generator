const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const writeFile = require('./src/generateHTML')
const generateManager = require('./src/HTMLliterals')
const fs = require('fs');
let employeeArr = [];

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: ['Add manager', 'Add engineer', 'Add intern', 'Quit application']
        }
    ])
        .then(choice => {
            switch (choice.menu) {
                case 'Add manager':
                    // manager prompts function here;
                    promptManager()
                    break;
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
                    constructFile()
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
        .then(function (answers) {
            const managerData = new Manager(answers.name, answers.id, answers.email, answers.officeNum);
            employeeArr.push(managerData);
            const managerCard = generateManager(managerData)
            console.log(managerCard)
            writeFile(managerCard)
            return promptMenu();
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
        .then(function (answers) {
            const engineerData = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employeeArr.push(engineerData);
            return promptMenu();
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
        .then(function (answers) {
            const internData = new Intern(answers.name, answers.id, answers.email, answers.school);
            employeeArr.push(internData);
            return promptMenu();
        });
};


// function constructFile () {
//     fs.writeFile('./dist/index.html', generateManager(managerData), (err) =>{
//         if (err) {
//             console.log(err)
//         }
//         else {
//             console.log("Team profile html generated successfully")
//         }
//     })
// }
const init = () => {
    promptMenu()
}

init()



// getGenMarkdown.generateHTML(employeeArr)))
// writeFile("./dist/index.html", generateHTML(employeeArr), "UTF-8"))