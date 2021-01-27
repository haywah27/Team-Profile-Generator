const Employee = require('./Employee');

function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email);
    this.github = github;
    this.role = "Engineer";
    getGithub();
    getRole(); 
    
}

function getRole(){
    return this.role;
}

function getGithub(){
    return this.github;
}

module.exports = Engineer;