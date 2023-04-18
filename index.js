require("dotenv").config();
const inquirer = require("inquirer");

const {
    getAllDepartments,
    getAllRoles,
    getAllEmployees
} = require("./config/queries");

inquirer
    .prompt({
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            // "Add a department",
            // "Add a role",
            // "Add an employee",
            // "Update an employee role",
            "Quit"
        ]
    })
    .then(answer => {
        switch (answer.action) {
        case "View all departments":
            getAllDepartments((err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.table(results);
                }
            });
            break;
        case "View all roles":
            getAllRoles((err, results) => {
                if (err) {
                  console.log(err);
                } else {
                  console.table(results);
                }
              });
            break;
        case "View all employees":
            getAllEmployees((err, results) => {
                if (err) {
                  console.log(err);
                } else {
                  console.table(results);
                }
              });
            break;
        // case "Add a department":

        //     break;
        // case "Add a role":

        //     break;
        // case "Add an employee":

        //     break;
        // case "Update an employee role":

        //     break;
        case "Quit":
            console.log("Goodbye!");
            process.exit(0);
        }
  });