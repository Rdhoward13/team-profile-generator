const Intern = require("../lib/intern");
// Creating intern object
test("creates an Intern object", () => {
  const intern = new Intern("Rachel", 1, "Rachel@gmail.com", "Ohio State");
  expect(intern.school).toEqual(expect.any(String));
});

// Gets getSchool()
test("gets employee school", () => {
  const intern = new Intern("Rachel", 1, "Rachel@gmail.com", "Ohio State");
  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});
// Gets getRole()
test("gets role of employee", () => {
  const intern = new Intern("Rachel", 1, "Rachel@gmail.com", "Ohio State");
  expect(intern.getRole()).toEqual("Intern");
});
