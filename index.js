// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");
const md = ''
const project = {
    title: '',
    description: '',
    refences: []
};
const questions = [
    {
        name: 'projectTitle',
        message: 'What is the name of your Project?',
        nextQuestion: 'projectDescription',
    },
    {
        name: 'projectDescription',
        message: 'Please proved a detailed descrption of your Project.',
        nextQuestion: 'askContents',
    },
    {
        name: 'askContents',
        message: 'Please enter a Table of Contents for your Project.',
        nextQuestion: 'howTo',
    },
    {
        name: 'howTo',
        message: 'Please explain the Installation process.',
        nextQuestion: 'toUse',
    },
    {
        name: 'toUse',
        message: 'Please explain how to use this Project.',
        nextQuestion: 'addContributors',
    },
    {
        name: 'addContributors',
        message: 'Please list all Contributors that helped with this Project.',
        nextQuestion: 'runTests',
    },
    {
        name: 'runTests',
        message: 'Please input testing instructions for this Project.',
        nextQuestion: 'refrences',
    },
];
    


// TODO: Create an array of questions for user input


// TODO: Create a function to write README file
fs.writeFile('./README', md, (err) => {
if (err) throw err;

console.log('File created!');
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
