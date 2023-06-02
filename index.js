// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    message: 'What is the title of your project?',
    name: 'title',
  },
  {
    type: 'input',
    message: 'Provide a brief description of your project:',
    name: 'description',
  },
  {
    type: 'input',
    message: 'What are the installation instructions for your project?',
    name: 'installation',
  },];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`README file "${fileName}" has been created.`);
    }
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
