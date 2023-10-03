// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
      
     case 'IBM':
      return '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)]';

      case 'Mozilla':
        return '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';

      case 'None':
        return '';
}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return '[![License: MIT](https://opensource.org/licenses/MIT)';

    case 'IBM':
      return '[![License: IPL 1.0](https://opensource.org/licenses/IPL-1.0)';

      case 'Mozilla':
        return '[![License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)';

       case 'None':
        return '';
 }
};


//TODO: Create a function that returns the license section of README
//If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
  return '';
}
  return `
  ## Licenses
${renderLicenseBadge(data.license)}
${renderLicenseLink(data.license)}
  `
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.projectTitle}

## Description 
${data.projectDescription}

## Table of Contents
[Installation](#-Installation)

[How to Use](#How-to-use)

[Contributors](#-Contributors)

[Tests](#-Tests)

[License](#-License)

### Instalation
${data.projectInstall}

### How to Use
${data.projectUse}

### Contributors
${data.projectContributors}

## Test
${data.projectTest}

## License
${renderLicenseLink(data.license)}

## Contact
${data.githubName}
${data.userEmail}
 

}
`;
}

module.exports = generateMarkdown;