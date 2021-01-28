const Employee = require('./Employee');

function Engineer(name, id, email, github) {
    Employee.call(this, name, id, email);
    this.github = github;
    this.role = "Engineer";
    this.getGithub = function () {
        return this.github;
    };
    this.getRole = function () {
        return this.role;
    };
    
}

module.exports = Engineer;