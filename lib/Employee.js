function Employee(name, id, email) {
    this.name = name;
    this.id = id;
    this.role = "Employee";
    this.email = email;
    this.getName = function () {
        console.log("in get name funct")
        return this.name;
    }
    this.getID = function () {
        return this.id;
    };
    this.getEmail = function () {
        return this.email;
    };
    this.getRole = function () {
        return this.role;
    };  
}

module.exports = Employee;