const Intern = require("../lib/Intern");

// TEST THE WHOEL OBJECT
// test("describe what this tests purpose is")
test("creates an intern object containing specified values", () => {
  // create a varibale that we can use to run a test on
  const Intern = new Intern("Rachel", 2, "rachel@gmail.com", "Ohio State");
  // this is the actual test - employee.name should return a string
  expect(Intern.school).toEqual(expect.any(String));
});

// TEST getHub() METHOD
test("gets the interns school", () => {
  const Intern = new Intern("Rachel", 2, "rachel@gmail.com", "Ohio State");

  expect(Intern.getSchool()).toEqual(expect.any(String));
});
