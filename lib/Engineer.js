const Employee = require('./Employee');

function Engineer(name, id, role, email, github) {
    this.github = github;
    getGithub();
    getRole(); 
    Employee.call(this, name, id, role, email);
}

function getRole(){
    return this.role;
}

function getGithub(){
    return this.github;
}

module.exports = Engineer;