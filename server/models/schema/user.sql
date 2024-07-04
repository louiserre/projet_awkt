CREATE TABLE IF NOT EXISTS user (
    id_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    firstName VARCHAR(255),
    email VARCHAR(250) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(255),
    id_refreshToken INT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    deleted_at DATETIME,
    FOREIGN KEY (id_refreshToken) REFERENCES refreshToken(id_token)         
);

/*
CREATE TABLE IF NOT EXISTS user (
    id_user INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    firstName VARCHAR(255),
    email VARCHAR(250) UNIQUE,
    password VARCHAR(255),
    role VARCHAR(255),
    id_token INT NULL,
    created_at DATETIME,
    updated_at DATETIME,
    FOREIGN KEY (id_token) REFERENCES authToken(id_token)         
);
*/