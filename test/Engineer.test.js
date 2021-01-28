const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");

test("Set name of engineer", () => {
    const name = "Hayley";
    const emp = new Engineer(name);
    expect(emp.name).toBe(name);
});

test("Set id of engineer", () => {
    const testID = 2727111;
    const emp = new Engineer("Hayley", testID);
    expect(emp.id).toBe(testID);
});

test("Set email of engineer", () => {
    const testEmail = "testemail@gmail.com"
    const emp = new Engineer("Hayley", 2727, testEmail);
    expect(emp.email).toBe(testEmail);
});

test("Set github account info of engineer", () => {
    const testGithub = "haywah27";
    const emp = new Engineer("Hayley", 2727, "testemail@gmail.com", testGithub);
    expect(emp.github).toBe(testGithub);
});

test("Get github account info from getGithub() function", () => {
    const testGithub = "haywah27";
    const emp = new Engineer("Hayley", 2727, "testemail@gmail.com", testGithub);
    expect(emp.getGithub()).toBe(testGithub);
});

test("Get name of engineer from getName function", () => {
    const testName = "Hayley"
    const emp = new Engineer(testName);
    expect(emp.getName()).toBe(testName);
});

test("Get ID of engineer from getID function", () => {
    const testID = 2727;
    const emp = new Engineer("Hayley", testID, "testemail@gmail.com");
    expect(emp.getID()).toBe(testID);
});

test("Get role of engineer from getRole function", () => {
    const testRole = "Engineer"
    const emp = new Engineer("Hayley", 2727, "testemail@gmail.com", "haywah27");
    expect(emp.getRole()).toBe(testRole);
});