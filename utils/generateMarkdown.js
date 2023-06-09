// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {const licenseBadges = {
  'MIT': 'https://img.shields.io/badge/License-MIT-yellow.svg',
  'Apache 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
  
};

if (license && licenseBadges.hasOwnProperty(license)) {
  return `![License](${licenseBadges[license]})`;
}

return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://opensource.org/licenses/Apache-2.0',
  };

  if (license && licenseLinks.hasOwnProperty(license)) {
    return licenseLinks[license];
  }

  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License

This project is licensed under the ${license} license. ${renderLicenseLink(license)}`;
  }

  return '';
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge}

  ## Description
  
  ${data.description}
  
  ${licenseSection}
`;
}

module.exports = generateMarkdown;
