// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title of the Project. (REQUIRED)',
        validate: projectTitle => {
            if(projectTitle) {
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
            if(projectDescription) {
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
            if(projectInstallation) {
                return true;
            } else {
                console.log('Please Enter Project Installation')
                return false
            }
        }
    },
    /*COME BACK TO THIS LATER FOR USAGE AND ADDING PICTURES DYNAMICALLY*/
    {
        type: 'input',
        name: 'usage',
        message: 'How is this product used? (REQUIRED)',
        validate: projectUsage=> {
            if(projectUsage) {
                return true;
            } else {
                console.log('Please Enter Usage Information')
                return false
            }
        }
    },
    /*COME BACK TO ADD MULTIPLE CONTRIBUTERS AND THEIR RESPECTIVE GITHUB LINKS*/
    {
        type: 'input',
        name: 'credits',
        message: 'List the contributers for the project. (REQUIRED)',
        validate: projectInstallation => {
            if(projectInstallation) {
                return true;
            } else {
                console.log('Please Enter Contributers')
                return false
            }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Choose from a list of licenses. Badges will be added to the top of the README (REQUIRED)',
        choices: ['Apache 2.0', "GNU GPLv3", "MIT","ISC"]
    },
    /*ADD MORE BADGES HERE WITH CONFIRM, TOP LANGUAGES ETC.*/
    {
        type: 'confirm',
        name: 'contributing',
        message: 'Would you like others to contribute?',
        choices: ["Yes", "No"]
    },
    /*Add Check later if yes, put description, else continue*/
    /*Add multiple test later if time permits*/
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
        name: 'link',
        message: 'Enter the GitHub link to your project. (Required)',
        validate: projectLink => {
          if (projectLink) {
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
      }
];

const promptUser = () => {
    return inquirer.prompt(questions).then(projectData => {
        console.log(projectData)
    });
}
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
promptUser();