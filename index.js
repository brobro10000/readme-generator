//CONSTANTS AND IMPORTS
const inquirer = require('inquirer');
const fs = require('fs');
const { generateMarkdown, renderLicenseLink } = require('./utils/generateMarkdown.js');
const readmeName = "sampleREADME"
//QUESTION OBJECT CONTAINING ALL QUESTIONS
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of the Project. (REQUIRED)',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log('Please Enter a Project Title')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a Short Description about your Project. (REQUIRED)',
        validate: projectDescription => {
            if (projectDescription) {
                return true;
            } else {
                console.log('Please Enter a Project Description')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project? (REQUIRED)',
        validate: projectInstallation => {
            if (projectInstallation) {
                return true;
            } else {
                console.log('Please Enter Project Installation')
                return false
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is this product used? (REQUIRED)',
        validate: projectUsage => {
            if (projectUsage) {
                return true;
            } else {
                console.log('Please Enter Usage Information')
                return false
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose from a list of licenses. Badges will be added to the top of the README (REQUIRED)',
        choices: ['Apache 2.0', "GNU GPLv3", "MIT", "ISC"]
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to the project? (REQUIRED)',
        validate: projectContributers => {
            if (projectContributers) {
                return true;
            } else {
                console.log('\nYou must enter the names of the contributers')
                return false
            }
        }
    },
    {
        type: 'confirm',
        name: 'contributing',
        message: 'Would you like others to contribute?',
        choices: ["Yes", "No"]
    },
    {
        type: 'input',
        name: 'test',
        message: 'Enter tests for your projects. (Required)',
        validate: projectTest => {
            if (projectTest) {
                return true;
            } else {
                console.log('Enter some tests for the project');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your Github username. (Required)',
        validate: projectUsername => {
            if (projectUsername) {
                return true;
            } else {
                console.log('You need to enter a project GitHub link');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter an email address for people to reach you(Required)',
        validate: userEmail => {
            if (userEmail) {
                return true;
            } else {
                console.log('You need to enter an email address');
                return false;
            }
        }
    },

];
//FUNCTION THAT USES INQUIRER TO PROMPT USER THROUGH TERMINAL, RETURNS WRITE TO FILE
const promptUser = () => {
    return inquirer.prompt(questions).then(projectData => {
        renderLicenseLink(projectData)
        return writeToFile(readmeName, projectData)
    })
}
//GLOBAL i FOR FILE GENERATION
var i = 1
//WRITE FILE, CHECKS IF FILE EXIST, IF IT DOES CALLS FUNCTION AGAIN TO WRITE
function writeToFile(fileName, data) {
    fs.access(`${fileName}(${i++}).md`, (err) => {
        if (err) {
            fs.writeFile(`${fileName}(${--i}).md`, generateMarkdown(data), function (err) {
                if (err) {
                    return console.log(err);
                }
                console.log(`${fileName}(${i}) successfully generated.`);
            });
        } else {
            return writeToFile(fileName, data)
        }
    })
}
//STARTS PROGRAM
promptUser();


