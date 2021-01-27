const Employee = require('./Employee');

function Intern(name, id, role, email, school) {
    this.school = school;
    getSchool();
    getRole();
    Employee.call(this, name, id, role, email);
}

function getRole(){
    return this.role;
}

function getSchool(){
    return this.school;
}
module.exports = Intern;