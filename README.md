# Readme generator
  
This is a simple command-line application that generates a README file based on user input.

Prerequisites
Before running this application, make sure you have the following packages installed:

Used inquirer: A Node.js package for collecting user input from the command line.

Used npm install fs inquirer

It was used to run the application, navigate to the project directory and execute the following command:


To use type node index.js in the terminal

Then you will be prompted with a series of questions to provide information about your project. Answer each question and press Enter to proceed to the next one.

Once you have answered all the questions, the application will generate a README.md file based on your input.

Customization
You can customize the questions asked by modifying the questions array in the index.js file. Each question object in the array specifies the type of input (e.g., input, confirm, etc.), the prompt message, and the name of the variable where the user's answer will be stored.

The generated README.md file will be formatted using the generateMarkdown function in the generateMarkdown.js file. You can modify the generateMarkdown function to change the structure and content of the generated README file.

This project is licensed under the MIT License.

Links
https://github.com/Josiahr4321/README-Generator
