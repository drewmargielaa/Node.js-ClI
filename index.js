// prompt the user
const inquirer = require('inquirer');
// make requests
const api = require('./utils/api.js');
// build markdown
const md = require('./utils/generateMarkdown.js');
// file system
const fs = require('fs');

const questions = [
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'Project Title?'
    },
    {
    type: 'input',
    name: 'version',
    message: 'Project Version?'
    },
    {
      type: 'editor',
      name: 'description',
      message: 'Project Description'
    },
    {
      type: 'editor',
      name: 'installation',
      message: 'How do you install the project?'
    },
    {
      type: 'editor',
      name: 'usage',
      message: 'How do you use the project?'
    },
    {
      type: 'input',
      name: 'license',
      message: 'Project license?  If applicable '
    },
  ];


function init() {
  inquirer
    .prompt(questions)
    .then(answers => {
      api.request(answers.username).then(response => {
        
        if(response !== null) {
          answers.email = response[0];
          answers.avatar = response[1];
        }
        else {
          console.log('Could not communicate with Github server');
          return;
        }

        
        const content = md.generateMarkdown(answers);

        // write the data to a file
        writeToFile('README.md', content);
      });

    });


}

function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function(error) {
    if(error) console.log(error);
    else console.log('Success!');
  });


}

// run program
init();