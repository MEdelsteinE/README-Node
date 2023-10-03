// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");


function promptUser() {
    inquirer.prompt([
        {
            name: 'projectTitle',
            message: 'Please enter the name of your Project',
        },
        {
            name: 'projectDescription',
            message: 'Please describe your Project',
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
            type: 'list',
            name: 'license',
            message: 'Please choose a license you want to use',
            choices: ['MIT','IBM', 'Mozilla', 'None']
        },
        {
            name: 'githubName',
            message: 'Please enter your Github username',
        },
        {
            name: 'userEmail',
            message: 'Please enter your Github email where future contributors can contact you'
        },
        {
             name: 'userEmail',
            message: 'Please enter your Github email where future contributors can contact you',
        }

    ]).then(function (answers) {
        console.log(answers);
        const readmeText = generateMarkdown(answers);

        fs.writeFile('./README.md', readmeText, (err) => {
            if (err) throw err;
        });
    })
}




// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
// // fs.writeFile('./README', md, (err) => {
// // if (err) throw err;

// console.log('File created!');
// });
// TODO: Create a function to initialize app
function init() { }
promptUser();
// Function call to initialize app
init();


