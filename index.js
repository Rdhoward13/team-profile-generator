const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require(".lib/Manager");
const engineer = require(".lib/Engineer");
const Intern = require(".lib/Intern");

const generateHTML = require("./src/teamGenerator");

const teamArray = [];

function addEmployee() {
  inquirer
    .createPromptModule([
      {
        type: "list",
        name: "employeePrompt",
        message: "What type of employee would you like to add?",
        choices: ["Manager", "Engineer", "Intern", "No more needed"],
      },
    ])
    .then(function (userInput) {
      switch (userInput.employeePrompt) {
        case "Manager":
          addManager();
          break;
        case "Engineer":
          addEnginer();
          break;
        case "Intern":
          addIntern();
          break;

        default:
          writeHtml();
      }
    });
}
