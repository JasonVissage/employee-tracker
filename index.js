const inquirer = require('inquirer');
const mysql = require('mysql2');
const consoleTable = require('console.table');

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
}