const Employee = require('./Employee');

function Manager(name, id, role, email, office) {
    this.office = office;
    getRole(); 
    Employee.call(this, name, id, role, email);
}

function getRole(){
    return this.role;
}

module.exports = Manager;