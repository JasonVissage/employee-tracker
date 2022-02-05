const inquirer = require('inquirer');
const mysql = require('mysql2');
// const consoleTable = require('console.table');


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // {TODO: Add your MySQL password}
      password: 'root',
      database: 'employee_list'
    },
    console.log(`Connected to the inventory_db database.`)
);

const startProgram = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: 'Choose an option from below.',
            choices: [
                'View all Departments',
                'View all Roles',
                'View all Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role'
            ]
        }
    ])

.then((optionResponse) => {
    switch(optionResponse.options) {
        case 'View all Departments':
            // add function
            viewDept();
            break;
        case 'View all Roles':
            // add function
            viewRoles();
            break;
        case 'View all Employees':
            // add function
            viewEmployees();
            break;
        case 'Add Department':
            // add function
            break;
        case 'Add Role':
            // add function
            break;
        case 'Add Employee':
            // add function
            break;
        case 'Update Employee Role':
            // add function
            break;

    }
})
}

const viewDept = () => {
    db.query('SELECT * FROM department ORDER BY id', function (err, results) {
        console.table(results)
    })
}

const viewRoles = () => {
    db.query('SELECT * FROM employee_role ORDER BY id', function (err, results) {
        console.table(results)
    })
}

const viewEmployees = () => {
    db.query('SELECT * FROM employee', function (err, results) {
        console.table(results)
    })
}


startProgram();