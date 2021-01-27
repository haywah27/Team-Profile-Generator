const Employee = require('./Employee');

function Manager(name, id, email, office) {
    Employee.call(this, name, id, email);
    this.office = office;
    this.role = "Manager";
    getRole(); 
    
}
function getRole(){
    return this.role;
}

module.exports = Manager;