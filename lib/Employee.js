function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.role = "Employee";
    this.email = email;
    getName();
    getID();
    getEmail();
    getRole();  
}

function getName(){
    return this.name;
}

function getID(){
    return this.id;
}

function getEmail(){
    return this.email;
}

function getRole(){
    return this.role;
}

module.exports = Employee;