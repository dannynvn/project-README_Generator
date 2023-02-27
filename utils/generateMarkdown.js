const fs = require('fs');

let licenseSection = '';


//generates markdown for README
function generateMarkdown(data) {
    const markdown = `# ${data.title}<br>

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [How to contribute](#how-to-contribute)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)


## Installation
${data.installation}


## Usage
${data.usage}


## Credits
${data.credits}


## How to contribute
${data.contribute}


## Tests
${data.tests}


## Questions?
If you have any questions, you can reach me by email: ${data.email}
<br>
You can also visit my github profile at: https://github.com/${data.username}


## License



`;

    fs.writeFile('./Generated-README/README.md', markdown, (err) =>
          err ? console.log(err) : console.log('README Generated!')
    );

    function renderLicenseSection()  {
      if (data.license != 'NO LICENSE') {
        console.log('generate license')
        let licenseSection = `This application is covered under the following license: ${data.license}`


        fs.appendFile('./Generated-README/README.md', licenseSection, (err) =>
        err ? console.log(err) : console.log('Licensing added!')
        );
      }  else {
        console.log('no license');
        fs.appendFile('./Generated-README/README.md', licenseSection, (err) =>
        err ? console.log(err) : console.log('No license indicated')
      )};
    }

    renderLicenseSection();

    
}

module.exports = generateMarkdown;
