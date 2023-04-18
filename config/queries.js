const connection = require("./connection");

function getAllDepartments(callback) {
    const query = `SELECT * FROM department;`;
    connection.query(query, (error, results) => {
        if (error) {
            callback(error, null);
        } else {
            callback(null, results);
        }
    });
};

function getAllRoles(callback) {
    const query = `SELECT * FROM role;`;
    connection.query(query, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
};

function getAllEmployees(callback) {
    const query = `SELECT CONCAT(first_name, ' ', last_name) AS employee_name FROM employee;`;
    connection.query(query, (error, results) => {
      if (error) {
        callback(error, null);
      } else {
        callback(null, results);
      }
    });
  };
  
module.exports = {
    getAllDepartments,
    getAllRoles,
    getAllEmployees
};