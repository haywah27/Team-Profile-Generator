const Employee = require('./Employee');

function Intern(name, id, email, school) {
    Employee.call(this, name, id, email);
    this.school = school;
    this.role = "Intern";
    getSchool();
    getRole();
    
}

function getRole(){
    return this.role;
}

function getSchool(){
    return this.school;
}
module.exports = Intern;