INSERT INTO department (id, name)
VALUES
    (1, "Sales"),
    (2, "Marketing"),
    (3, "Engineering"),
    (4, "Finance"),
    (5, "Human Resources");

INSERT INTO role (id, title, salary, department_id)
VALUES
    (1, "Salesperson", 50000, 1),
    (2, "Sales Lead", 75000, 1),
    (3, "Marketing Coordinator", 45000, 2),
    (4, "Marketing Manager", 80000, 2),
    (5, "Software Engineer", 100000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "John", "Doe", 2, NULL),
    (2, "Jane", "Smith", 1, 2),
    (3, "Bob", "Johnson", 5, NULL),
    (4, "Mary", "Williams", 5, 3),
    (5, "Tom", "Brown", 3, 4);