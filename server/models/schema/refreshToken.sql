CREATE TABLE IF NOT EXISTS refreshToken (
    id_refreshToken INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_user INT,
    refreshToken VARCHAR(255),            
    iat INT,
    exp INT,
    created_at DATETIME,
    updated_at DATETIME,
    deleted_at DATETIME,
    FOREIGN KEY (id_user) REFERENCES user(id_user)          
);


/*
CREATE TABLE IF NOT EXISTS authToken (
    id_token INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    id_user INT,
    refreshToken VARCHAR(255),            
    iat INT,
    exp INT,
    FOREIGN KEY (id_user) REFERENCES user(id_user)          
);
*/
