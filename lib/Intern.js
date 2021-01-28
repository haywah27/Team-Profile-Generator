const Employee = require('./Employee');

function Intern(name, id, email, school) {
    Employee.call(this, name, id, email);
    this.school = school;
    this.role = "Intern";
    this.getSchool = function () {
        return this.school;
    };
    this.getRole = function () {
        return this.role;
    };
    
}

module.exports = Intern;