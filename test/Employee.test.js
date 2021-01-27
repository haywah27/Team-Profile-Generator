const { test } = require("@jest/globals");
const { getMaxListeners } = require("process");
const Employee = require("../lib/Employee");

// test("Reepresents employee object", () => {
//     const emp = new Employee();
//     expect(typeof(emp)).toBe("object");
// })

test("Can set name of employee", () => {
    const name = "Hayley";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});


test("Can set id of employee", () => {
    const testID = 2727111;
    const emp = new Employee("Hayley", testID);
    expect(emp.id).toBe(testID);
});

test("Can set role of employee", () => {
    
    const emp = new Employee("Hayley", 2727, "Employee");
    expect(emp.role).toBe("Employee");
});
