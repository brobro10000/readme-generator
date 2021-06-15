// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title of Project',
        message: 'What is the Title of the Project (REQUIRED)',
        validate: projectTitle => {
            if(projectTitle) {
                console.log(questions)
                return true;
            } else {
                console.log('Please Enter a Project Title')
                return false
            }
        }
    }
];

const promptUser = () => {
    return inquirer.prompt(questions);
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    console.log(questions)
}

// Function call to initialize app
init();
promptUser();