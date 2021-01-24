const inquirer = require("inquirer");
const fs = require("fs");
const profile = require("./generateProfile");


const questions = [
    {
        type: "input",
        message: "What is the employee name?",
        name: "name",
      },
      {
        type: "list",
        message: "What best describes their position?",
        choices: ["Manager", "Engineer", "Intern"],
        name: "title",
      },
      {
        type: "input",
        message: "What is their emplooyee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their office number?",
        name: "office",
      }
];




function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err =>
    err ? console.error(err) : console.log("Success! New README generated!"));

}

function init() {

    inquirer.prompt(questions).then(
        answers => {
            console.log(answers);
            // badge = markdown.renderBadge(answers.license);
            // badgeLink = markdown.renderLink(answers.license);
            // licenseSection = markdown.renderSection(answers.license);
            
            writeToFile("index.html", profile.manager(answers.name, answers.title, answers.id, answers.email, answers.office));
        })
    
}

init();