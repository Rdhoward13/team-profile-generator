const Manager = require("../lib/manager");
// Creates manager object
test("creates an Manager object", () => {
  const manager = new Manager("Rachel", 1, "Rachel@gmail.com", 2);
  expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Gets getRole()
test("gets role of employee", () => {
  const manager = new Manager("Rachel", 1, "Rachel@gmail.com");
  expect(manager.getRole()).toEqual("Manager");
});
