CREATE TABLE IF NOT EXISTS contact (
    id_contact INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    firstName VARCHAR(255),
    email VARCHAR(250),
    type_formation VARCHAR(255),
    message TEXT,
    status BOOLEAN,
    created_at DATETIME,
    updated_at DATETIME            
);