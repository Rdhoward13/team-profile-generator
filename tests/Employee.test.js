const Employee = require("../lib/Employee");

// TEST THE WHOEL OBJECT
// test("describe what this tests purpose is")
test("creates an employee object containing specified values", () => {
  // create a varibale that we can use to run a test on
  const employee = new Employee("Rachel", 2, "rachel@gmail.com");
  // this is the actual test - employee.name should return a string
  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

// TEST getName() METHOD
test("gets the employee name", () => {
  const employee = new Employee("Rachel", 2, "rachel@gmail.com");

  expect(employee.getName()).toEqual(expect.any(String));
});

// TEST getId() METHOD
test("gets the employee id", () => {
  const employee = new Employee("Rachel", 2, "rachel@gmail.com");

  expect(employee.getId()).toEqual(expect.any(Number));
});

// TEST getEmail() METHOD
test("gets the employee email", () => {
  const employee = new Employee("Rachel", 2, "rachel@gmail.com");

  expect(employee.getEmail()).toEqual(expect.any(String));
});
