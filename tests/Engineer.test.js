const Engineer = require("../lib/Engineer");

// TEST THE WHOEL OBJECT
// test("describe what this tests purpose is")
test("creates an engineer object containing specified values", () => {
  // create a varibale that we can use to run a test on
  const engineer = new Engineer("Rachel", 2, "rachel@gmail.com", "rdhoward13");
  // this is the actual test - employee.name should return a string
  expect(engineer.github).toEqual(expect.any(String));
});

// TEST getHub() METHOD
test("gets the engineers github", () => {
  const engineer = new Engineer("Rachel", 2, "rachel@gmail.com", "rdhoward13");

  expect(engineer.getGithub()).toEqual(expect.any(String));
});

// TEST getRole() METHOD
test("gets the engineer role", () => {
  const engineer = new Engineer("Rachel", 2, "rachel@gmail.com", "rdhoward13");

  expect(engineer.getRole()).toEqual(expect.any(String));
});
