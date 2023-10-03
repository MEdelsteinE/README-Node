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
  return `# ${data.projectTitle}

## Description 
${data.projectDescription}

### Instalation
${data.projectInstall}

### How to Use
${data.projectUse}

### Contributors
${data.projectContributors}
`;
}

// projectTitle: 'test',
// projectDescription: 't',

// projectInstall: 't',
// projectUse: 't',
// projectContributors: 't',
// projectTest: 't',
// githubName: 't',
// userEmail: 't'

module.exports = generateMarkdown;