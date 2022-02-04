DROP DATABASE IF EXISTS employee_list;
CREATE DATABASE employee_list;

USE employee_list;

-- creates employee table
CREATE TABLE employee (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    role_id INTEGER
);

-- creates dept table
CREATE TABLE department (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20) NOT NULL
);

-- creates role table
CREATE TABLE role (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(20) NOT NULL,
    salary INTEGER(6) NOT NULL
);