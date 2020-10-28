DROP DATABASE IF EXISTS proxy;

CREATE DATABASE proxy;

USE proxy;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  product varchar(50) NOT NULL,
  description varchar(50) NOT NULL,
  PRIMARY KEY (ID)
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/
