const { assertExportNamedDeclaration } = require("@babel/types");
const { test } = require("@jest/globals");
const { getMaxListeners } = require("process");
const Employee = require("../lib/Employee");

test("Set name of employee", () => {
    const name = "Hayley";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test("Set id of employee", () => {
    const testID = 2727111;
    const emp = new Employee("Hayley", testID);
    expect(emp.id).toBe(testID);
});

test("Set email of employee", () => {
    const testEmail = "testemail@gmail.com"
    const emp = new Employee("Hayley", 2727, testEmail);
    expect(emp.email).toBe(testEmail);
});

test("Get name of employee from getName function", () => {
    const testName = "Hayley"
    const emp = new Employee(testName);
    expect(emp.getName()).toBe(testName);
});

test("Get ID of employee from getID function", () => {
    const testID = 2727;
    const emp = new Employee("Hayley", testID, "testemail@gmail.com");
    expect(emp.getID()).toBe(testID);
});

test("Get email of employee from getName function", () => {
    const testEmail = "testemail@gmail.com";
    const emp = new Employee("Hayley", 2727, testEmail);
    expect(emp.getEmail()).toBe(testEmail);
});

test("Get role of employee from getRole function", () => {
    const testRole = "Employee"
    const emp = new Employee("Hayley", 2727, "testemail@gmail.com");
    expect(emp.getRole()).toBe(testRole);
});
