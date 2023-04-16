require("dotenv").config();

const { getAllDepartments } = require("./config/queries");

getAllDepartments((err, results) => {
    if (err) {
    console.log(err);
    } else {
        console.log(results);
    }
});