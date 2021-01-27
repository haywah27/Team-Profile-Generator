function Employee(name, id, role, email) {
    this.name = name;
    this.id = id;
    this.role = role;
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