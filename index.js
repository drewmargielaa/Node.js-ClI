var inquirer = require("inquirer");
var fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the Project Title",
      name: "projecttitle"
    },
    {
      type: "input",
      message: "Instructions/ How to get started",
      name: "instructions"
    },
    {
      type: "input",
      message: "What are the prerequisites",
      name: "prerequisites"
    }
    {
      type: "input",
      message: "How to install",
      name: "install"
    }
    {
      type: "input",
      message: "How to run the tests",
      name: "tests"
    }
    {
      type: "input",
      message: "Any additional notes",
      name: "notes"
    }
  ])
  .then(function (response) {

    console.log(response.jobTitle);



    let readMe_template = `## Read ME ${response.projecttitle},${response.instructions},${response.prerequisites},`;
    


    fs.writeFile("log.txt", readMe_template, function (err) {

      if (err) {
        return console.log(err);
      }

      console.log("Success!");

    });


    
  });
