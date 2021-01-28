const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Set name of manager", () => {
    const name = "Hayley";
    const emp = new Manager(name);
    expect(emp.name).toBe(name);
});

test("Set id of manager", () => {
    const testID = 2727111;
    const emp = new Manager("Hayley", testID);
    expect(emp.id).toBe(testID);
});

test("Set email of manager", () => {
    const testEmail = "testemail@gmail.com"
    const emp = new Manager("Hayley", 2727, testEmail);
    expect(emp.email).toBe(testEmail);
});

test("Set office number of manager", () => {
    const testOffice = 143;
    const emp = new Manager("Hayley", 2727, "testemail@gmail.com", testOffice);
    expect(emp.office).toBe(testOffice);
});

test("Get name of manager from getName function", () => {
    const testName = "Hayley"
    const emp = new Manager(testName);
    expect(emp.getName()).toBe(testName);
});

test("Get ID of manager from getID function", () => {
    const testID = 2727;
    const emp = new Manager("Hayley", testID, "testemail@gmail.com");
    expect(emp.getID()).toBe(testID);
});

test("Get email of manager from getName function", () => {
    const testEmail = "testemail@gmail.com";
    const emp = new Manager("Hayley", 2727, testEmail);
    expect(emp.getEmail()).toBe(testEmail);
});

test("Get role of manager from getRole function", () => {
    const testRole = "Employee"
    const emp = new Manager("Hayley", 2727, "testemail@gmail.com");
    expect(emp.getRole()).toBe(testRole);
});