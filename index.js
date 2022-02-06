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
            addDept();
            break;
        case 'Add Role':
            // add function
            addRole();
            break;
        case 'Add Employee':
            // add function
            addEmployee();
            break;
        case 'Update Employee Role':
            // add function
            break;

    }
})
}

const viewDept = () => {
    db.query('SELECT dept_name FROM department ORDER BY id', function (err, results) {
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

addDept = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newDept',
            message: 'Name of department?',
            validate: (newOption) => {
                if (newOption) {
                    return true;
                } else {
                    console.log('Please enter a valid response');
                    return false;
                }
            }
        }
    ])
    .then((optionResponse) => {
        const sql = `INSERT INTO department (dept_name) VALUES (?)`;

        db.query(sql, optionResponse.newDept, (err, res) => {
            if (err) throw err;
            console.log("The " + optionResponse.newDept + " dept has been added");
            viewDept();
        })

    })
}


addRole = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newRole',
            message: 'Name of Role?',
            validate: (newOption) => {
                if (newOption) {
                    return true;
                } else {
                    console.log('Please enter a valid response.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'newSalary',
            message: 'Input new Salary.',
            validate: (newOption) => {
                if (newOption) {
                    return true;
                } else {
                    console.log('Please enter a valid response.');
                    return false;
                }
            }
        }
    ])
    .then((optionResponse) => {
        const parameters = [optionResponse.newRole, optionResponse.newSalary];
        const newRoleSql = `SELECT dept_name, id FROM department`;

        db.query(newRoleSql, (err, res) => {
            if (err) throw err;
            const dept = data.map(({ name, id }) => ({ name: dept_name, value: id }));

            inquirer.prompt([
                {
                    type: 'list',
                    name: 'dept',
                    message: 'What dept is this role for?',
                    choices: dept,
                },
            ])
            .then((options) => {
                const dept = options.dept;
                parameters.push(dept);

                const sql = 'INSERT INTO employee_role (title, salary, dept_id) VALUES (?, ?, ?';

                db.query(sql, parameters, (err, res) => {
                    if (err) throw err;
                    console.log('The ' + optionResponse.newDept + ' role has been added');
                viewRoles();
                })
            })
        })

    })
}


startProgram();