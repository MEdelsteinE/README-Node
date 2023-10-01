// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const md = '';
const project = [];

function promptUser() {
inquirer.prompt ([
    {
        name: 'projectTitle',
        message: 'Please enter the name of your Project',
    },
    {
        name: 'projectDescription',
        message: 'Please describe your Project',
    },
    {
        name: 'projectContents',
        message: 'Please enter a table of contents for your Project',
    },
    {
        name: 'projectInstall',
        message: 'Please explain how to install your Project',
    },
    {
        name: 'projectUse',
        message: 'Please explain how to use this Project',
    },
    {
        name: 'projectContributors',
        message: 'Please list all Technologies and people whom helped with this Project',
    },
    {
        name: 'projectTest',
        message: 'Please enter testing instructions you would like for this Project',
    },
    {
        name: 'githubName',
        message: 'Please enter your Github username?',
    },
    {
        name: 'userEmail',
        message: 'Please enter your Github email where future contributors can contact you'
    }

])}
    

    


// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
// // fs.writeFile('./README', md, (err) => {
// // if (err) throw err;

// console.log('File created!');
// });
// TODO: Create a function to initialize app
function init() {}
    promptUser();
// Function call to initialize app
init();

fs.writeFile('./README', md, (err) => {
    if (err) throw err;
});    
