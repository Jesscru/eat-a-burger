DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45),
  devoured BOOLEAN,
  PRIMARY KEY (id)
);