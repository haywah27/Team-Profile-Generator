const inquirer = require("inquirer");
const fs = require("fs");
const profile = require("./generateProfile");

let teamArr = [];

const teamNameQuestions = [

    {
        type: "input",
        message: "What is your teamname?",
        name: "team"
    }

];

const addNewMember = [

    {
        type: "list",
        message: "Would you like to add another team member?",
        choices: ["Yes, add Engineer.", "Yes, add Intern.", "No more team additions."],
        name: "newAddition"
    }

];

const managerQuestions = [

    {
        type: "input",
        message: "What is the employees name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their office number?",
        name: "office"
      }
];

const engineerQuestions = [

    {
        type: "input",
        message: "What is the employees name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their GitHub username?",
        name: "GitHub"
      }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the employees name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "email",
      },
      {
        type: "input",
        message: "What school did they go to?",
        name: "school"
      }
];




// function writeToFile(fileName, data) {
    
//     fs.writeFile(fileName, data, err =>
//     err ? console.error(err) : console.log("Success! New README generated!"));

// }

// function init() {

//     inquirer.prompt(questions).then(
//         answers => {
//             console.log(answers);
//             // badge = markdown.renderBadge(answers.license);
//             // badgeLink = markdown.renderLink(answers.license);
//             // licenseSection = markdown.renderSection(answers.license);
            
//             writeToFile("index.html", profile.manager(answers.name, answers.title, answers.id, answers.email, answers.office));
//         })
    
// }

// init();

function init(){
    inquirer.prompt(teamNameQuestions).then(
        response => {
            // console.log(response);
            const team = response.team;
            addManager();
        });
}

function addManager(){
    inquirer.prompt(managerQuestions).then(
        response => {
            console.log(response);
            const name = response.name;
            const role = "Manager";
            const id = 1;
            const email = response.email;
            const office = response.office;
            const teammate = new Manager(name, id, role, email, office);
            teamArr.push(teammate);
            // console.log(teamArr);
            // addMember();
        });
}

function addMember(){
    inquirer.prompt(addNewMember).then(
        response => {
            console.log(response)
        });
}

init();


// 1. // predefine the 3 classes/constructor functions for the three types of employees : manager, engineer, intern
// 2. get info from the client about each employee to be added
//    2.1 ask for name and other info of the manager
//    2.2 ask if client wants to add another employee or exit
//    3.3 repeat  2.2 until exit;
// greet and ask for managers name: 
// build an employee of type manager using a constructor (by passing all the info into the constructor)
    // generate html with info of the employee (by running build command)
// ask client if they want to add more interns or enginners or exit 
// if they want to exit, finish the app
// if the want to build a new employer, add one to html using the constructor of the apropriate type 
function Employee(name, id) {
    this.name = name;
    this.id = id;
    this.buildHtml = function buildHtml() {
      console.log(this.name);
      console.log(this.id);
      console.log(this.role);
  }
}
  function Manager(name, id, role, email, office) {
    this.role = role;
    this.email = email;
    this.office = office;
    Employee.call(this, name, id);
  }

  function Engineer(name, id, role) {
    this.role = role;
    Employee.call(this, name, id);
  }

  function Intern(name, id, role) {
    this.role = role;
    Employee.call(this, name, id);
  }

//   const manager = new Manager('A', 'B', 'C');
//   manager.buildHtml();