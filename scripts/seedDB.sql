DROP DATABASE IF EXISTS employee_management_db;
CREATE DATABASE employee_management_db;
USE employee_management_db;

-- ///////////////////////////////////
-- Create and populate employees_table

CREATE TABLE employees_table(
    id INT(5) AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    department_id INT(3),
    job_id INT(3),
    -- pay_grade INT(3),
    supervisor BOOLEAN DEFAULT false
);

INSERT INTO employees_table(first_name, last_name, department_id, job_id, supervisor)
VALUES ("Michael", "Bolton", 2, 1, false), ("Peter", "Gibbons", 1, 1, false), ("Samir", "Nayinanaja", 3, 2, false), ("Ron", "Lumberg", 4, 4, true);

-- ///////////////////////////////////
-- Create and populate department_table

CREATE TABLE department_table(
    id INT(3) AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(50) NOT NULL
);

INSERT INTO department_table(department_name)
VALUES ("Information Technologies"), ("Accounting"), ("Customer Service"), ("Human Resources");

-- ///////////////////////////////////
-- Create and populate jobs_table

CREATE TABLE jobs_table(
    id INT(3) AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(50) NOT NULL,
    pay_grade INT(3) NOT NULL
);

INSERT INTO jobs_table(job_title, pay_grade)
VALUES ("Data Entry Clerk", 2), ("Accountant", 3), ("Customer Service Representative", 1), ("Data Entry Manager", 4);

-- ///////////////////////////////////
-- Create and populate pay_table

CREATE TABLE pay_table(
    id INT(3) NOT NULL PRIMARY KEY,
    amount INT(5) NOT NULL
);

INSERT INTO pay_table(id, amount)
VALUES (1, 40000), (2, 50000), (3, 60000), (4, 70000);

SELECT * FROM employees_table;
SELECT * FROM department_table;
SELECT * FROM jobs_table;
SELECT * FROM pay_table;