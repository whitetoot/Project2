DROP DATABASE IF EXISTS Pryia_db;
CREATE DATABASE `Pryia_db`.`events` (
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255),
    `description` TEXT,
    `location` TEXT,
    `contact` TEXT,
    `url` VARCHAR(255),
    `start` DATETIME,
    `end` DATETIME,
    PRIMARY KEY (`id`),
    INDEX idx_start (`start`),
    INDEX idx_end (`end`)
) ENGINE=INNODB DEFAULT CHARSET=UTF8 COLLATE=UTF8_UNICODE_CI;()
