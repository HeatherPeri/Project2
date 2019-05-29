DROP DATABASE IF NOT EXISTS astrology_db;
CREATE DATABASE astrology_db;
USE astrology_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS astro;

-- Create the burgers table
CREATE TABLE astro (
    id int NOT NULL AUTO_INCREMENT,
    astro_name varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

select * from astro