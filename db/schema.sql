DROP DATABASE IF EXISTS burgers_db;


CREATE DATABASE burgers_db;
USE burgers_db;


CREATE TABLE burgers(
    id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
  	date DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  	PRIMARY KEY(id)
);

INSERT INTO burgers (burger_name, devoured) VALUES ('Double, Double', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('California Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Baconater', false);

SELECT * FROM burgers;