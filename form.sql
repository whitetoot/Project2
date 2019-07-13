CREATE DATABASE form_db;
USE form_db;

CREATE TABLE `forms`
(
  `id` Int
( 11 ) AUTO_INCREMENT NOT NULL,
  `name` VARCHAR
( 255) NOT NULL,
  `email` VARCHAR
( 255) NOT NULL,
  `message` VARCHAR
( 255) NOT NULL,
  `body` VARCHAR
( 255 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY
( `id` ) 
);