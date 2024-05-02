// Utility functions for generating the README content
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "GNU GPL v3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache 2.0":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3-Clause":
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
    default:
      return "";
  }
}

// Returns a license link string based on the license type
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "[MIT License](https://opensource.org/licenses/MIT)";
    case "GNU GPL v3":
      return "[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0)";
    case "Apache 2.0":
      return "[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)";
    case "BSD 3-Clause":
      return "[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)";
    case "None":
    default:
      return "";
  }
}

// Returns a formatted License section based on the license type
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    const badge = renderLicenseBadge(license);
    const link = renderLicenseLink(license);

    return `## License\nThis project is licensed under the ${link}.\n\n${badge}`;
  }
}

// Generates markdown content for the README based on input data
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  return `# ${data.title}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${renderLicenseSection(
    data.license
  )} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
