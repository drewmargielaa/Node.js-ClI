
const inquirer = require('inquirer');

const api = require('./utils/api.js');

const md = require('./utils/generateMarkdown.js');

const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter Github Username?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'Title of Project?'
      },
      {
      type: 'input',
      name: 'version',
      message: 'What is this projects version?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project Description'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'How do you install the project?'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?'
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
      
              writeToFile('README.md', content);
            });
      
          });
      
      
      }
      
      function writeToFile(fileName, data) {
      
        fs.writeFile(fileName, data, function(err) {
          if(err) console.log(err);
          else console.log('Success!');
        });
      
      
      }
      
      // Start
      init();
