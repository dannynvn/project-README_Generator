//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'test question 1',
        name: '',
    },
    {
        type: 'input',
        message: 'question 2',
        name: '',
    },
    {
        type: 'input',
        message: 'question 3',
        name: '',
    },
    {
        type: 'input',
        message: 'question 4',
        name: '',
    },
    {
        type: 'input',
        message: 'question 5',
        name: '',
    }
    {
        type: 'list',
        message: 'question 6',
        choices: ['a', 'b', 'c'],
        name: 'license',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions);
}

// Function call to initialize app
init();
