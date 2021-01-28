const Intern = require("../lib/Intern");
const Employee = require("../lib/Employee");

test("Set name of intern", () => {
    const name = "Hayley";
    const emp = new Intern(name);
    expect(emp.name).toBe(name);
});

test("Set id of intern", () => {
    const testID = 2727111;
    const emp = new Intern("Hayley", testID);
    expect(emp.id).toBe(testID);
});

test("Set email of intern", () => {
    const testEmail = "testemail@gmail.com"
    const emp = new Intern("Hayley", 2727, testEmail);
    expect(emp.email).toBe(testEmail);
});

test("Set school info of intern", () => {
    const testSchool = "University of Oregon";
    const emp = new Intern("Hayley", 2727, "testemail@gmail.com", testSchool);
    expect(emp.school).toBe(testSchool);
});

test("Get school of intern from getSchool function", () => {
    const testSchool = "University of Oregon";
    const emp = new Intern("Hayley", 2727, "testemail@gmail.com", testSchool);
    expect(emp.getSchool()).toBe(testSchool);
});

test("Get name of intern from getName function", () => {
    const testName = "Hayley"
    const emp = new Intern(testName);
    expect(emp.getName()).toBe(testName);
});

test("Get ID of intern from getID function", () => {
    const testID = 2727;
    const emp = new Intern("Hayley", testID, "testemail@gmail.com");
    expect(emp.getID()).toBe(testID);
});

test("Get role of intern from getRole function", () => {
    const testRole = "Intern"
    const emp = new Intern("Hayley", 2727, "testemail@gmail.com", "haywah27");
    expect(emp.getRole()).toBe(testRole);
});