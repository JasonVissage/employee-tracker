DROP DATABASE IF EXISTS employee_list;
CREATE DATABASE employee_list;

USE employee_list;

-- creates dept table
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(30) UNIQUE NOT NULL
);

-- creates role table
CREATE TABLE employee_role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL(8, 2) NOT NULL,
    dept_id INTEGER NOT NULL,
    CONSTRAINT fk_dept FOREIGN KEY (dept_id) REFERENCES department(id)
);

-- creates employee table
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES employee_role(id)
);

