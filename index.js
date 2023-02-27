//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

//array of all licensing options
const licenses = ['NO LICENSE',
    'BSD Zero Clause License',													
    'Academic Free License v3.0',													
    'GNU Affero General Public License v3.0',													
    'Apache License 2.0',													
    'Artistic License 2.0',													
    'BSD 2-Clause "Simplified" License',													
    'BSD 3-Clause Clear License',													
    'BSD 3-Clause "New" or "Revised" License',													
    'BSD 4-Clause "Original" or "Old" License',													
    'Boost Software License 1.0',													
    'Creative Commons Attribution 4.0 International',													
    'Creative Commons Attribution Share Alike 4.0 International',													
    'Creative Commons Zero v1.0 Universal',													
    'CeCILL Free Software License Agreement v2.1',													
    'CERN Open Hardware Licence Version 2 - Permissive',													
    'CERN Open Hardware Licence Version 2 - Strongly Reciprocal',													
    'CERN Open Hardware Licence Version 2 - Weakly Reciprocal',													
    'Educational Community License v2.0',													
    'Eclipse Public License 1.0',													
    'Eclipse Public License 2.0',													
    'European Union Public License 1.1',													
    'European Union Public License 1.2',													
    'GNU Free Documentation License v1.3',													
    'GNU General Public License v2.0',													
    'GNU General Public License v3.0',													
    'ISC License',													
    'GNU Lesser General Public License v2.1',													
    'GNU Lesser General Public License v3.0',													
    'LaTeX Project Public License v1.3c',													
    'MIT No Attribution',													
    'MIT License',													
    'Mozilla Public License 2.0',													
    'Microsoft Public License',													
    'Microsoft Reciprocal License',													
    'Mulan Permissive Software License, Version 2',													
    'University of Illinois/NCSA Open Source License',													
    'Open Data Commons Open Database License v1.0',													
    'SIL Open Font License 1.1',													
    'Open Software License 3.0',													
    'PostgreSQL License',													
    'The Unlicense',													
    'Universal Permissive License v1.0',													
    'Vim License',													
    'Do What The F*ck You Want To Public License',													
    'zlib License',
]

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a project description.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage instructions.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines.',
        name: 'credits',
    },
    {
        type: 'input',
        message: 'Enter test instructions.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'question 7',
        choices: licenses,
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



