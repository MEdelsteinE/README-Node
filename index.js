// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const md = ''
const project = {
    refences: []
};
// TODO: Create an array of questions for user input
function askTitle() {
inquirer.prompt ({  
    name: 'projectTitle',
    message: 'What is is the name of your project?',
    }).then(answer => {
        project.projectTitle = answer.projectTitle;
        askDescription();
    });
}

function askDescription() {
    inquirer.prompt ({
        name: 'projectDescription',
        message: 'Please proved a detailed descrption of your project.',
        }).then(answer => {
            project.projectDescription = answer.projectDescription;
            askContents();
        });
}

function askContents() {
    inquirer.prompt ({
        name: 'Contents',
        message: 'Please enter a Table of Contents for your project',
    }).then(answer => {
        project.Contents = answer.Contents;
        howTo();
    });
}

function howTo() {
    inquirer.prompt ({
        name: 'Installation',
        message: 'Please explain the Installation process',
        }).then(answer => {
            project.Installation = answer.Installation;
            toUse();
        });
}

function toUse() {
    inquirer.prompt ({
        name: 'Usage',
        message: 'Please explain how to use this project',
    }).then(answer => {
        project.Usage = answer.Usage;
        addContributors();
    });
}

function addContributors () {
    inquirer.prompt
}

// TODO: Create a function to write README file
fs.writeFile('./README', md, (err) => {
if (err) throw err;

console.log('File created!');
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
