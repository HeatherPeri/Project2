CREATE DATABASE IF NOT EXISTS astrology_db;
USE astrology_db;

-- If the table already exists, remove it before trying to create the table again
DROP TABLE IF EXISTS wikipedia;

-- Create the burgers table
CREATE TABLE wikipedia (
    id int NOT NULL AUTO_INCREMENT,
    title varchar(255) NOT NULL,
    description varchar(255) NOT NULL,
    search_query varchar(255) NOT NULL,
    PRIMARY KEY (id)
);

select * from wikipedia
