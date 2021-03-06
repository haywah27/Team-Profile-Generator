const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
        choices: ["Yeah, add Engineer.", "Yeah, add Intern.", "No more team additions."],
        name: "newAddition"
    }
];

const managerQuestions = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their ID number?",
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
        name: "office"
      }
];

const engineerQuestions = [

    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their ID number?",
        name: "id",
      },
      {
        type: "input",
        message: "What is their email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is their GitHub username?",
        name: "github"
      }
];

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is their ID number?",
        name: "id",
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


function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, err =>
    err ? console.error(err) : console.log("Success! New Team Profile generated!"));

}

function init(){
    inquirer.prompt(teamNameQuestions).then(
        response => {
            // console.log(response);
            const team = response.team;
            teamArr.push(team);
            addManager();
        });
}

function addManager(){
    inquirer.prompt(managerQuestions).then(
        response => {
            // console.log(response);
            const name = response.name;
            // const role = "Manager";
            const id = response.id;
            const email = response.email;
            const office = response.office;
            const teammate = new Manager(name, id, email, office);
            teamArr.push(teammate);
            // console.log(teamArr);

            addMember();
        });
}

function addMember(){
    inquirer.prompt(addNewMember).then(
        response => {
            console.log(response);
            switch (response.newAddition) {
                case ("Yeah, add Engineer."):
                    addEngineer();
                    break;
                case ("Yeah, add Intern."):
                    addIntern();
                    break;
                case ("No more team additions."):
                    // console.log(teamArr);
                    // console.log("new page");
                    buildHTML();
                    break;
            }
        });
}

function addEngineer(){
    inquirer.prompt(engineerQuestions).then(
        response => {
            // console.log(response);
            const name = response.name;
            // const role = "Engineer";
            const id = response.id;
            const email = response.email;
            const github = response.github;
            const teammate = new Engineer(name, id, email, github);
            teamArr.push(teammate);
            // console.log(teamArr);
            addMember();
        });
}

function addIntern(){
    inquirer.prompt(internQuestions).then(
        response => {
            // console.log(response);
            const name = response.name;
            // const role = "Intern";
            const id = response.id;
            const email = response.email;
            const school = response.school;
            const teammate = new Intern(name, id, email, school);
            teamArr.push(teammate);
            // console.log(teamArr);
            addMember();
        });
}

function buildHTML(){
    let pageArr = [];
    const htmlHeader = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" rel="stylesheet">
        <link rel="stylesheet" href="./Assets/style.css">
        <title>Team Profile</title>
    </head>
    <body>
      <div id="page-container">
    
        <section class="hero is-small is-bold" id="jumbotronStyle">
          <div class="hero-body">
            <div class="container has-text-centered">
              <h1 class="display-3">${teamArr[0]}</h1> 
            </div>
          </div>
        </section>
    
        <div class="container columnWid">
          <div class="section">
            <div class="row columns is-multiline is-centered">`

    pageArr.push(htmlHeader);

    for(let i = 1; i < teamArr.length; i++) {
        let htmlCard = `
        <div class="column is-4 cardWidth">
        <div class="card cardWidth cardBorder">
            <div class="card-content cardHeader">
            <p class="title cardHeader">${teamArr[i].name}</p>`;

        if(teamArr[i].role === "Manager"){
            htmlCard += `
                <p class="subtitle cardHeader"><i class="fas fa-mug-hot iconColor"></i>&ensp; ${teamArr[i].role}</p>
                </div>
                <div class="card-content">
                <footer class="cardBorderLight">
                    <p class="card-content footerSize">ID: ${teamArr[i].id}</p>
                </footer>
                <footer class="cardBorderDark">
                    <p class="card-content footerSize">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></p>
                </footer>
                <footer class="cardBorderLight">
                    <p class="card-content footerSize">Office Number: ${teamArr[i].office}</p>
                </footer>`
        }

        if(teamArr[i].role === "Engineer"){
            htmlCard += `
                <p class="subtitle cardHeader"><i class="fas fa-glasses iconColor"></i>&ensp; ${teamArr[i].role}</p>
                </div>
                <div class="card-content">
                <footer class="cardBorderLight">
                    <p class="card-content footerSize">ID: ${teamArr[i].id}</p>
                </footer>
                <footer class="cardBorderDark">
                    <p class="card-content footerSize">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></p>
                </footer>
                <footer class="cardBorderLight">
                    <p class="card-content footerSize">GitHub: <a href="https://github.com/${teamArr[i].github}" target="_blank">${teamArr[i].github}</a></p>
                    
                </footer>`
        }

        if(teamArr[i].role === "Intern"){
            htmlCard += `
                <p class="subtitle cardHeader"><i class="fas fa-user-graduate iconColor"></i>&ensp; ${teamArr[i].role}</p>
                </div>
                <div class="card-content">
                <footer class="cardBorderLight">
                    <p class="card-content footerSize">ID: ${teamArr[i].id}</p>
                </footer>
                <footer class="cardBorderDark">
                    <p class="card-content footerSize">Email: <a href="mailto:${teamArr[i].email}">${teamArr[i].email}</a></p>
                </footer>
                <footer class="cardBorderLight">
                    <p class="card-content footerSize">School: ${teamArr[i].school}</p>
                </footer>`
        }

        htmlCard += `
            </div>
        </div>
        </div>`

        pageArr.push(htmlCard);
        // console.log(teamArr[i].role)
    };
      
    const htmlBottom = `
    
            </div>
          </div>  
        </div>
    
      </div>
    </body>
    </html>`
    pageArr.push(htmlBottom);
    // pageArr.join("");
    // console.log(JSON.stringify(pageArr));

    writeToFile("index.html", pageArr.join(""));

}

init();
