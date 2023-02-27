const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    const markdown = `# ${data.title}<br>

## Description
${data.description}


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [How to contribute](#how-to-contribute)
- [Tests](#tests)


## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${data.credits}


## License
${data.license}


## How to contribute
${data.contribute}


## Tests
${data.tests}

`;

  fs.writeFile('./Generated-README/README.md', markdown, (err) =>
        err ? console.log(err) : console.log('Success!')
  );
}

module.exports = generateMarkdown;
