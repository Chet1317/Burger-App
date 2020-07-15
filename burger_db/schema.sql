CREATE DATABASE burgers_db;
USE burgers_db;

Create TABLE burgers(
id INTEGER auto_increment PRIMARY KEY,
burger_name VARCHAR (30),
devoured BOOLEAN 
);

INSERT INTO burgers (id, burger_name, devoured) VALUES 
(1, "chicken bacon burger", false), 
(0, "mozzerealla burger", false),
(0, "bacon and cheddar burger", false);